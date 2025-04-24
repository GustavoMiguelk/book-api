import express, {Request, Response} from "express"
import { knex } from "./database/knex"

const PORT = 3333

const app = express()

app.use(express.json())

// Lista os Livros 
app.get("/books", async (request: Request, response:Response) =>{
    const books = await knex("books")
    .select("name", "description", "author_id")
    .orderBy("name")

    response.status(201).json(books)
})

// Lista os Autores
app.get("/authors", async (request: Request, response:Response) =>{
    const authors = await knex("authors")
    .select()
    .orderBy("name")

    response.status(201).json(authors)
})

// Adiciona um novo Livro
app.post("/books", async (request: Request, response:Response) => {
    const { name, description, author_id} = request.body

    await knex("books").insert({ name, description, author_id})

    response.status(201).json({name, description, author_id})
})

app.listen(PORT, () => console.log(`Server is Running at port ${PORT}`))
