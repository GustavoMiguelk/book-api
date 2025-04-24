import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("books", (table) =>{
        table.increments("id").primary(),
        table.text("name").notNullable(),
        table.text("description").notNullable(),
        // Criando Relacionamento
        table.integer("author_id").references("id").inTable("authors")
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("books")
}

