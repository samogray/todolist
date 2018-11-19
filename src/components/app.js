import React from 'react'
import Todos from './todos'
import Input from './input'
import Filter from './filter'
import Header from './header'


class App extends React.Component {
  state= {
    todos: [
      {
        id: 1,
        label: 'learn redux'
      },
      {
        id: 2,
        label: 'learn malakies'
      },
      {
        id: 4,
        label: 'learn diving'
      }
    ]
  }

  handleRemoveItem = (idItem) => {
    const newTodos = this.state.todos.filter(({id}) => idItem !== id)
    this.setState({todos: newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div>
        <Header />
        <Input />
        <Filter />
        <Todos todolist={todos} handleRemoveItem={this.handleRemoveItem}/>
      </div>
    )
  }
}

export default App
