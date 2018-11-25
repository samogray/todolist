import React from 'react'
import classNames from 'classnames'
import './item.css'

const  TodoItem = ({
  label,
  handleRemoveItem,
  toggleDone,
  toggleImportant,
  done,
  important}) => {
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
        <button type="button" onClick={handleRemoveItem} className="todo-item__btn">➖</button>
        <button type="button" onClick={toggleImportant} className="todo-item__btn">
        ❗
        </button>
      </li>
    )
}

export default TodoItem
