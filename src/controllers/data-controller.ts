import { Request, Response} from "express"
import { knex } from "../database/knex";

export class AuthorsController {

    async index(request: Request , response: Response){
        const authors = await knex("authors").select()
        
        response.status(201).json(authors)
    }

    async create(request: Request , response: Response){
        const { name } = request.body
       
        await knex("authors").insert({ name })
       
        response.json({name}) 
    }

    async update(request: Request , response: Response){
        const { id } = request.params
        const { name } = request.body
        
        await knex("authors").update({name}).where({id})
        
        response.json()
    }

    async remove(request: Request , response: Response){
        const { id } = request.params

        await knex("authors").delete().where( {id })

        response.json()
    }   
}

export class BooksController {
    async index(request: Request , response: Response){
        const books = await knex("books")
        .select("id","name", "description", "author_id")
    
        response.status(201).json(books)
    }

    async create(request: Request , response: Response){
        const { name, description, author_id} = request.body
        
        await knex("books").insert({ name, description, author_id})
        
        response.status(201).json({name, description, author_id})
    }

    async update(request: Request , response: Response){
        const { id } = request.params
        const { name, description, author_id } = request.body
        
        await knex("books").update({ name, description, author_id }).where({id})
        
        response.json()
    }

    async remove(request: Request , response: Response){
        const { id } = request.params

        await knex("books").delete().where({ id })
    
        response.json()
    }
}