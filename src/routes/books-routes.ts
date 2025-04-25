import { Router, Request, Response } from "express";
import { BooksController } from "../controllers/data-controller";

export const booksRoutes = Router()

const booksController = new BooksController()

// Lista os Livros
booksRoutes.get("/books", booksController.index)

// Adiciona um novo Livro
booksRoutes.post("/books", booksController.create)

// Altera o livro
booksRoutes.put("/books/:id", booksController.update)

// Deleta um livro
booksRoutes.delete("/books/:id", booksController.remove)