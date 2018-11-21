import React from 'react'
import TodoItem from '../todo-item'

const Todos = ({todolist, handleRemoveItem, toggleDone, toggleImportant}) => {
  return (
    <ul>
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
