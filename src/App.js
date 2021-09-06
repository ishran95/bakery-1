import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './components/Button'
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'
import Card from './components/Card.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: "add",
      items: []
    }
  }

  handleButtonClick = (e) => {
    this.setState({ activeTab: e.target.innerText })
  }

  addItem = (itemName, itemPrice) => {
    this.setState({ items: [ ...this.state.items, { name: itemName, price: itemPrice } ] })
  }

	render() {
    console.log(this.state)

		return(
      <>
        <Button
          isSelected={this.state.activeTab === "add"}
          handleClick={this.handleButtonClick}
        >
            add
        </Button>
        <Button
          isSelected={this.state.activeTab === "list"}
          handleClick={this.handleButtonClick}
        >
          list
        </Button>
        <Button
          isSelected={this.state.activeTab === "pay"}
          handleClick={this.handleButtonClick}
        >
          pay
        </Button>
        
        
        {this.state.activeTab === "add" && <Add addItem={this.addItem} />}
        {this.state.activeTab === "list" && <List items={this.state.items} />}
        {this.state.activeTab === "pay" && <Pay items={this.state.items} />}
      </>
		)
	}
}

export default App