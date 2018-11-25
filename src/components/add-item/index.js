import React from 'react'
import './style.css'

class AddItem extends React.Component {
  state = {
    inputValue: ''
  }

  onChange = (event) => this.setState({inputValue: event.target.value})

  submitForm = (event) => {
    event.preventDefault();
    this.props.handleAddItem(this.state.inputValue)
    this.setState({inputValue: ''})
  }


  render() {
    const {inputValue} = this.state
    return (<form onSubmit={this.submitForm} className="form">
      <input type="text" onChange={this.onChange} value={inputValue} placeholder="New Item" className="input input--add"/>
      <button type="submit" className="btn" >+ Add item</button>
    </form>)
  }
}

export default AddItem
