import React, {useState, useContext, useEffect} from 'react'
import Header from './Header.js'
import Subheader from './Subheader.js'
import Todos from './Todos.js'
import AddTodoForm from './AddTodoForm.js'
import { saveTodos } from '../functions'
import TodoContext from '../TodoContext'
import '../styles/app.css'
import '../styles/checkbox.css'

const Container = () => {
    const [state, setState] = useState('')
    const { todoList } = useContext(TodoContext)

    useEffect(() => {
        saveTodos(todoList)
    },[todoList])
   
    const handleCallback = (childData) => {
        setState(childData)
    }

    const [hideCompleteTodos, setHideCompleteTodos] = useState('')

    const hideCompleted = (childData) => {
        setHideCompleteTodos(childData)
    }

    return <div>
        <Header />
        <div className="container">
            <Subheader 
                handleCallback={handleCallback}
                hideCompleted={hideCompleted}
            />
            <div className="todos">
                <Todos 
                    filterBy = {state}
                    hideCompleted = {hideCompleteTodos}
                />
                <AddTodoForm />
            </div> 
        </div>
    </div>
}

export default Container