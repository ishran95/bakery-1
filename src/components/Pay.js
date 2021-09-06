import React from 'react'
import Card from './Card.jsx'
class Pay extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      basket:[],
      total:0,
      totalTVA:0,
      totalEcoTax:0,
      totalTTC:0,



        
       
    }
   

}
handleSelect=(name, price) => {
  console.log(name, price)
}
  render() {
    return(
      <>
      <h1>Pay</h1>
      <p>
        totale:{this.state.total}
      </p>
      <p> totalTVA{this.state.totalTVA}
       </p>
      <p>
      totalEcoTax{this.state.totalEcoTax}
      </p>
      <p>
      totalTTC{this.state. totalTTC}
      </p>
      {this.props.items.map(item => (
        <Card productName={item.name} price={item.price} onClik={this.handleSelect()}/>
      ))}

      </>


     
    )
  }
}

export default Pay