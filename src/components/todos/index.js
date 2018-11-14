import React from 'react'
import TodoItem from '../todo-item'

const Todos = ({todolist}) => {
  return <ul>
    {todolist.map(({id, label}) => <TodoItem label={label} key={id}/>)}
   </ul>
}
export default Todos

