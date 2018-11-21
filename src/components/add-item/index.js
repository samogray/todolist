import React from 'react'

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
    return (<form onSubmit={this.submitForm}>
      <input type="text" onChange={this.onChange} value={inputValue}/>
      <button type="submit">Add item</button>
    </form>)
  }
}

export default AddItem
