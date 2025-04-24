import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("authors").insert([
        { name: "Guimaraes Rosa" },
        { name: "George R. R. Martin" },
        { name: "Machado de Assis" },
        { name: "Mauricio de Souza" },
        { name: "Jose de Alencar" },
        { name: "J R. R. Tolkien" },
        { name: "Franz Kafka" },
        { name: "Stephen King" },
    ]);
};
