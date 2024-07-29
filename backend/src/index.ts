import express from 'express'
import { db } from './db'
import bodyParser from 'body-parser'
import { todos } from './db/schema'
import cors from 'cors'
import { eq } from 'drizzle-orm'

const app = express()

app.use(
    cors({
        origin: 'http://localhost:5173',
    }),
)

app.use(bodyParser.json())

app.get('/todos', async (req, res) => {
    res.json(await db.query.todos.findMany())
})

app.post('/todos', async (req, res) => {
    const inserted = await db.insert(todos).values({ todo: req.body.todoText }).returning()
    res.json(inserted[0])
})

app.delete('/todos', async (req, res) => {
    await db.delete(todos).where(eq(todos.id, req.body.id))
    res.send('')
})

app.put('/todos', (req, res) => {})

app.listen(3001)
