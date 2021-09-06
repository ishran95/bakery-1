import React from 'react'
class Card extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            image:"./Images/item.png"
           
        }
       
    
  }
  componentDidMount() {
      
    fetch("https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/" + this.props.productName+ ".png")
    .then(result => result.blob())
    .then((result) => {
        const picture=URL.createObjectURL(result)
      this.setState({image:picture})
    })
  }
    render() {
      return(
       <>
        <h1>Card</h1>
         <button onClick={() =>{this.props.onClick(this.props.productName,this.props.price)}}>  
          <img src={this.state.image} />
         </button>
       
        </>

      )

    }
  }








export default Card