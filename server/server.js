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

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
