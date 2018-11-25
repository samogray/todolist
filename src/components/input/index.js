import React from 'react'

class Input extends React.Component {

  state={
    value: ''
  }

  onchange =(event)=> {
    const {onSearchChange} = this.props
    onSearchChange(event.target.value)
  }
  
  render() {

    return (<div><input type="search" onChange={this.onchange}/></div>)
  }
}

export default Input
