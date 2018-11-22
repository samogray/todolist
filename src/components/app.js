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
    ],
    filter: 'all',
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

  onFilterChange = (filter) => this.setState({filter})

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

  getDoneItem = () => this.state.todos.filter(({done}) => done).length

  getActiveItem = () => this.state.todos.filter(({done}) => !done).length

  getImportantItem = () => this.state.todos.filter(({important}) => important).length

  filterTodos = (items, filter) => {
    const {todos} = this.state
    switch (filter) {
      case "done":
        return items.filter(({done}) => done)
      case "active":
        return items.filter(({done}) => !done)
      case 'important':
        return items.filter(({important}) => important)
      case 'all':
        return items
      default:
        return todos
    }
  }

  render() {
    const {todos, filter} = this.state
    return (
      <div>
        <Header
          done={this.getDoneItem()}
          active={this.getActiveItem()}
          important={this.getImportantItem()}
        />
        <Input />
        <Filter filter={filter} onFilterChange={this.onFilterChange}/>
        <Todos
          todolist={this.filterTodos(todos, filter)}
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
