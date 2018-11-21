import React from 'react'
import Todos from './todos'
import Input from './input'
import Filter from './filter'
import Header from './header'
import AddItem from './add-item'
import uid from 'uid'


class App extends React.Component {
  state= {
    todos: [
      {
        id: uid(),
        label: 'learn redux',
        done: false,
        important: false,
      },
      {
        id: uid(),
        label: 'learn malakies',
        done: false,
        important: false,
      },
      {
        id: uid(),
        label: 'learn diving',
        done: false,
        important: false,
      }
    ]
  }

  handleRemoveItem = (idItem) => {
    const newTodos = this.state.todos.filter(({id}) => idItem !== id)
    this.setState({todos: newTodos})
  }

  handleAddItem = (text) => {
    const newItem = {id: uid(), label: text, done: false, important: false}
    this.setState(({todos}) => {
        const newTodos = [...todos, newItem] 
        return {todos: newTodos}
    })
  }

  toggleProperty = (idItem, property) => {
    const {todos} = this.state
    const idx = todos.findIndex(el => el.id === idItem)
    const oldItem = todos[idx]
    const newItem = {...oldItem, [property]: !oldItem[property]}
    const newTodos = [
      ...todos.slice(0, idx),
      newItem,
      ...todos.slice(idx + 1)
    ]
     this.setState({todos: newTodos})
  }

  toggleDone = (idItem) => this.toggleProperty(idItem, 'done')

  toggleImportant = (idItem) => this.toggleProperty(idItem, 'important')

  render() {
    const {todos} = this.state
    return (
      <div>
        <Header />
        <Input />
        <Filter />
        <Todos
          todolist={todos}
          handleRemoveItem={this.handleRemoveItem}
          toggleDone={this.toggleDone}
          toggleImportant={this.toggleImportant}
        />
        <AddItem handleAddItem={this.handleAddItem}/>
      </div>
    )
  }
}

export default App
