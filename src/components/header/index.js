import React from 'react'

import './header.css'

const Header = ({done, active, important}) => (
  <header className="header">
    <h1 className="header__title">Todo list</h1>
    <ul className="list">
      <li className="list__item">{active} active</li>
      <li className="list__item">{important} important</li>
      <li className="list__item">{done} done</li>
    </ul>
  </header>
)

export default Header
