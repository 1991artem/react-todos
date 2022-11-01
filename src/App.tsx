import React, {createContext, useEffect, useState } from 'react';
import { ITodos, IAppContext } from './components/helps/interfaces';
import Router from './components/helps/Router';
import TaskInput from './components/task-input/TaskInput';

export const AppContext = createContext({} as IAppContext)


function App() {
  const [todos, setTodos] = useState([] as ITodos[])

  const fetchTodos = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(result => setTodos(result))
  }

  useEffect(()=>{
    fetchTodos()
  }, [])

  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map((todo: ITodos) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  const removeHandler = (id: number) => {
      setTodos(prev => prev.filter(todo => todo.id !== id))
  }
  const addHandler = (title: string) => {
    const newTodo: ITodos = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const clearComplitedTask = () => {
    setTodos(todos.filter((task: ITodos)=> !task.completed));
  } 

  const appContext: IAppContext = {
    todos: todos,
    onToggle: toggleHandler,
    onRemove: removeHandler,
    onAdd: addHandler,
    clearComplitedTask: clearComplitedTask,

  }


  return (
    <AppContext.Provider value={appContext}>
      <div className='container'>
        <h1>todos</h1>
        <TaskInput />
        <Router />
      </div>
    </AppContext.Provider>

  );
}

export default App;
