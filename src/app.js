import React from 'react'
import Todos from './components/todos'
import Input from './components/input'
import Filter from './components/filter'

const todos = [
  {
    id: 1,
    label: 'learn redux',
  },
  {
    id: 2,
    label: 'learn malakies',
  }
]

const App = () => (
  <div>
    <h1>Todo list</h1>
    <div>
      <Input />
      <Filter />
    </div>
    <Todos todolist={todos}/>
  </div>
)

export default App
