import React from 'react'
import classNames from 'classnames'
import './todo-item.scss'

class TodoItem extends React.Component {
  state = {
    done: false
  }

  toggleDone = () => this.setState(state => ({done: !state.done}))
  toggleImportant = () => this.setState(state => ({important: !state.important}))

  render() {
    const {label, handleRemoveItem,} = this.props
    const {done, important} = this.state
    return (
      <li className="todo-item">
        <button
          className={classNames(
            'todo-item__label',
            done && 'todo-item__label--active',
            important && 'todo-item__label--important'
          )}
          type="button"
          onClick={this.toggleDone}
        >
          {label}
        </button>
        <button type="button" onClick={handleRemoveItem}>-</button>
        <button type="button" onClick={this.toggleImportant}>
          {'\u{1F6C2}'}
        </button>
      </li>
    )
  }
}

export default TodoItem
