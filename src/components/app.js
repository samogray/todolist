import React from 'react'
import Todos from './todos'
import Input from './input'
import Filter from './filter'
import Header from './header'

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
      <Header />
      <Input />
      <Filter />
    <Todos todolist={todos}/>
  </div>
)

export default App
