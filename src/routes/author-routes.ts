import { Router, Request, Response } from "express";
import { AuthorsController } from "../controllers/data-controller";

export const authorsRoutes = Router()

const authorsController = new AuthorsController()

// Lista os Autores
authorsRoutes.get("/authors", authorsController.index)

// Altera o Autor
authorsRoutes.put("/authors/:id", authorsController.update)

// Adiciona um novo autor
authorsRoutes.post("/authors", authorsController.create)

// Deleta um Autor
authorsRoutes.delete("/authors/:id", authorsController.remove)