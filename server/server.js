import express, { json } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5001

app.use(cors())
app.use(json())

// const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/mern-stack-app-db'

mongoose.connect('mongodb://mongo_server:27017/mern-stack-app-db').then(() => {
    console.log('Connected to MongoDB')
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message)
})

const todoSchema = new mongoose.Schema({
    task: String,
    completed: Boolean
})

const Todo = mongoose.model('Todo', todoSchema)

app.get('/test', async (req, res) => {
    res.send('test')
})

app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find()
        res.json(todos)
    } catch (error) {
        console.log(error)
    }
})

app.post('/todos', async (req, res) => {
    try {
        const newTodo = await Todo(req.body)
        await newTodo.save()
        res.json(newTodo)
    } catch (error) {
        console.log(error)
    }
})

app.put('/todos/:id', async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.json(updatedTodo)
    } catch (error) {
        console.log(error)
    }
})

app.delete('/todos/:id', async (req, res) => {
    try {
        await Todo.deleteByIdAndRemove(req.params.id)
        res.json({
            message: 'Todo deleted successfully'
        })
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})