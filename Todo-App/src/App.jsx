import './App.css'
import { useState } from 'react'

function App() {
  const [newtodo, setNewtodo] = useState("")
  const [todo, setTodo] = useState([])

  // Add Todo
  function handleSubmit(e) {
    e.preventDefault()
    setTodo((prev) => [...prev, { text: newtodo, id: Date.now() }])
    setNewtodo("")
  }

  // Delete Todo
  function onDelete(id) {
    setTodo(todo.filter((item) => item.id !== id))
  }

  return (
    <div className="container">

      <h1>My Todo App</h1>

      <div className="todo-input">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter a task"
            value={newtodo}
            onChange={(e) => setNewtodo(e.target.value)}
          />
          <button type='submit'>Add</button>
        </form>
      </div>

      <ul className="todo-list">
        {todo.map((item) => (
          <li key={item.id}>
            {item.text}
            <button className="delete" onClick={() => onDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
