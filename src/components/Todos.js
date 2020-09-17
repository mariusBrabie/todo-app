import React, { useContext } from 'react'
import Todo from './Todo.js'
import TodoContext from '../TodoContext'
import '../styles/todos.css'

const Todos = (props) => {
    const { todoList } = useContext(TodoContext)
    
    const howManyNotDone = (myList) => {
        let counter = 0
        myList.forEach(item => {
            if (item.isDone === false) {
                counter ++    
            }
        })
        return counter
    }

    const notDoneTodos = howManyNotDone(todoList)

    let multipleOrNot
    notDoneTodos === 1 ? multipleOrNot = '' : multipleOrNot = 's'

    return <div>
        <h1>You have {notDoneTodos} todo{multipleOrNot} left</h1>
        <ul className="todos_list">
            {
                todoList.map((todo) => {
                    if ( (todo.title.includes(props.filterBy ) && props.hideCompleted && !todo.isDone) || (todo.title.includes(props.filterBy ) && !props.hideCompleted) )   {
                        return <li key={todo.id}>
                            <Todo
                                name={todo.title}
                                todoID={todo.id}
                                isChecked={todo.isDone}
                            />
                        </li>
                    }
                })
            }
        </ul>
    </div>
}

export default Todos