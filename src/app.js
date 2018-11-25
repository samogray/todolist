import React from 'react'
import {
  AddItem,
  Header,
  Filter,
  SearchInput,
  Todos} from './components'
import mockData from './utils/mock-state'
import filterTodos from './utils/filter-data'
import searchFilter from './utils/search-filter'
import uid from 'uid'


class App extends React.Component {
  state= {
    todos: mockData,
    filter: 'all',
    term: '',
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

  onSearchChange = (term) => this.setState({term})

  render() {
    const {todos, filter, term} = this.state
    const visibleItems = searchFilter(todos, term)
    console.log(term)
    return (
      <div>
        <Header
          done={this.getDoneItem()}
          active={this.getActiveItem()}
          important={this.getImportantItem()}
        />
        <SearchInput onSearchChange={this.onSearchChange}/>
        <Filter filter={filter} onFilterChange={this.onFilterChange}/>
        <Todos
          todolist={filterTodos(visibleItems, filter)}
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
