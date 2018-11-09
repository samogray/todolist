import React from 'react'
import ReactDom from 'react-dom'

const App = () => (
  <div>
    <h1>Todo list</h1>
    <ul>
      <li>item1</li>
      <li>item1</li>
    </ul>
  </div>
)

ReactDom.render(<App />, document.getElementById('root'))
