import React from 'react'

import './input.css'

class Input extends React.Component {

  onchange = event => {
    const {onSearchChange} = this.props
    onSearchChange(event.target.value)
  }

  render() {
    return <input className="input" placeholder="Search item" type="search" onChange={this.onchange} />
  }
}

export default Input
