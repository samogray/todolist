import React from 'react'
import classNames from 'classnames'
import './todo-item.scss'

const  TodoItem = ({label, handleRemoveItem, toggleDone, toggleImportant, done, important})=> {
   return (
      <li className="todo-item">
        <button
          className={classNames(
            'todo-item__label',
            done && 'todo-item__label--active',
            important && 'todo-item__label--important'
          )}
          type="button"
          onClick={toggleDone}
        >
          {label}
        </button>
        <button type="button" onClick={handleRemoveItem}>-</button>
        <button type="button" onClick={toggleImportant}>
          {'\u{1F6C2}'}
        </button>
      </li>
    )
}

export default TodoItem
