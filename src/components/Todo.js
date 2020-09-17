import React, { useContext } from 'react'
import TodoContext from '../TodoContext'
import '../styles/todo.css'

const Todo = (props) => {
    const { removeTodo, checkTodo } = useContext(TodoContext)

    return <div className="todo">
        <div>
            <label className="checkbox-label">
                <input
                    className="checkbox"
                    checked={props.isChecked}
                    type="checkbox"
                    onChange={() => {
                        checkTodo(props.todoID)
                    }}
                />
                <span className="checkbox-custom"></span>
                <span className="todo-text">{props.name}</span>
            </label>
        </div>
        <button 
            onClick={() => removeTodo(props.todoID)}
            className="remove"
        >remove</button>
    </div>
}

export default Todo