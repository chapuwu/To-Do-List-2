import express from 'express'
import { db } from './db'
import { todos } from './db/schema'
import cors from 'cors'

const app = express()

app.use(
    cors({
        origin: 'http://localhost:5173',
    }),
)

app.get('/todos', async (req, res) => {
    res.send(await db.query.todos.findMany())
})

app.listen(3001)
