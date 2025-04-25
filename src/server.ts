import express from "express"
import { authorsRoutes } from "./routes/author-routes"
import { booksRoutes } from "./routes/books-routes"

const PORT = 3333

const app = express()

app.use(express.json())

// Utilizando as Rotas
app.use(authorsRoutes)
app.use(booksRoutes)

app.listen(PORT, () => console.log(`Server is Running at port ${PORT}`))
