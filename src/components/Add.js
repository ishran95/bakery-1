import React from 'react'

class Add extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      price: 0
    }
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handlePriceChange = (e) => {
    this.setState({ price: e.target.value })
  }

  render() {
    return(
      <>
        <h1>Add</h1>
        <input
          type="text"
          onChange={this.handleNameChange}
          value={this.state.name}
        />
        <br />
        <br />
        <input
          type="range"
          min="0"
          max="10"
          onChange={this.handlePriceChange}
          value={this.state.price}
        />
        <span>{this.state.price}</span>
        <br />
        <button onClick={() => {
          this.props.addItem(this.state.name, this.state.price)
        }}>Add item</button>
      </>
    )
  }
}

export default Add