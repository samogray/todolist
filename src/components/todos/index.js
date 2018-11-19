import React from 'react'
import TodoItem from '../todo-item'

const Todos = ({todolist, handleRemoveItem}) => {
  return (
    <ul>
      {todolist.map(({id, label}) => (
        <TodoItem
          label={label}
          key={id}
          handleRemoveItem={() => handleRemoveItem(id)}
        />
      ))}
    </ul>
  )
}
export default Todos
