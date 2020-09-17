import React, { useContext } from 'react'
import TodoContext from '../TodoContext'
import '../styles/add.css'

const AddTodoForm = () => {
    const { addTodo } = useContext(TodoContext)

    const whenAddTodo = (e) => {
      e.preventDefault()
      const todoValue = e.target.add_todo.value.trim('')
      if (todoValue) {
        addTodo(todoValue)
      }
      e.target.add_todo.value = ''  
    }

    return <div>
      <form onSubmit={whenAddTodo}  className="add-form">
        <input id="add_todo" type="text" placeholder="add a new todo" autoComplete="off" />
        <button className="add-todo">Add Todo</button>
      </form>
    </div>
  }

  export default AddTodoForm