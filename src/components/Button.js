import React from 'react'

class Button extends React.Component {
  render() {
    

    return (
			<button
        onClick={this.props.handleClick}
        className={`btn m-2 ${this.props.isSelected ? "btn-primary" : "btn-outline-primary"}`}
      >
        {this.props.children}
      </button>
    )
  }
}

export default Button