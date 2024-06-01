const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5001

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost/mern-stack-app-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
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
    const todos = await Todo.find()
    res.json(todos)
})

app.post('/todos', async (req, res) => {
    const newTodo = await Todo(req.body)
    await newTodo.save()
    res.json(newTodo)
})

app.put('/todos/:id', async (req, res) => {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.json(updatedTodo)
})

app.delete('/todos/:id', async (req, res) => {
    await Todo.deleteByIdAndRemove(req.params.id)
    res.json({message: 'Todo deleted successfully'})
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
