import React from 'react'

class List extends React.Component {
  render() {
    console.log(this.props)

    return(
      <>
        <h1>List</h1>
        <ul>
          {this.props.items.map((item) => {
            console.log(item)

            return (
              <li>
                <p>{item.name}: <strong>{item.price}$</strong></p>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default List