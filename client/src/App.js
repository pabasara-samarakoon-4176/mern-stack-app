import React, { useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import TodoForm from './TodoForm'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5001/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.log(error))
  }, [])

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  return (
    <div>
      <h1>MERN Stack Todo App</h1>
      <TodoForm onAdd={addTodo}/>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
