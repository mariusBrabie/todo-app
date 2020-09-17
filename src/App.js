import React, { useReducer } from 'react';
import TodoContext from './TodoContext'
import Container from './components/Container'
import { getID, getTodos } from './functions'

const reducer = (state, action) => {
    switch (action.type) {
      case 'add-todo':
        return [...state , { title: action.payload, id: getID(), isDone: false }]
      case 'remove-todo':
        return state.filter((todo) => {
          return todo.id !== action.payload
        })
      case 'check-todo':
        return state.map(todo => {
          if (todo.id === action.payload){
            return { title: todo.title, id: todo.id, isDone: !todo.isDone }
          }else{
            return { title: todo.title, id: todo.id, isDone: todo.isDone }
          }
        })
      default:
        return state
    }
}

const App = () => {
  const [todoList, dispatch] = useReducer(reducer, getTodos())

  const addTodo = (todoValue) => {
    dispatch({ type: 'add-todo', payload: todoValue })
  }
  const removeTodo = (id) => {
    dispatch({ type: 'remove-todo', payload: id })
  }
  const checkTodo = (id) => {
    dispatch({ type: 'check-todo', payload: id })
  }

  return <TodoContext.Provider value={{ todoList, addTodo, removeTodo, checkTodo }}>
    <Container />
  </TodoContext.Provider>
}

export default App;