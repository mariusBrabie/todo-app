export const getID = () => {
    return Math.floor(Math.random() * 9999999999)
  }
  
export const getTodos = () => {
    const todosJSON = localStorage.getItem('savedTodos')
    try {
      return todosJSON ? JSON.parse(todosJSON) : [] 
    } catch(e) {
      return []
    }
  }
  
export const saveTodos = (todos) => {
    localStorage.setItem('savedTodos', JSON.stringify(todos))
  }