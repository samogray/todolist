import React from 'react'

const Header = ({done, active, important}) => (
  <header>
    <h1>Todo list</h1>
    <ul>
      <li>{active} active</li>
      <li>{important} important</li>
      <li>{done} done</li>
    </ul>
  </header>
)

export default Header
