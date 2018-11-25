import React from 'react'
import TodoItem from '../todo-item'
import './todos.css'

const Todos = ({todolist, handleRemoveItem, toggleDone, toggleImportant}) => {
  return (
    <ul className="todo-list">
      {todolist.map(({id, label, done, important}) => (
        <TodoItem
          label={label}
          key={id}
          handleRemoveItem={() => handleRemoveItem(id)}
          toggleDone={() => toggleDone(id)}
          toggleImportant={() => toggleImportant(id)}
          done={done}
          important={important}
        />
      ))}
    </ul>
  )
}
export default Todos
