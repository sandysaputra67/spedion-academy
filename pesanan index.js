import React, { Component } from "react";

export const CartContext = React.createContext();

export default class PesananStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    console.log('Adding to cart', product);
    this.setState({
      cartItems: this.state.cartItems.concat(product)
    });
  }

  render() {
    return (
      <CartContext.PesananStudent value={{
        cartItems: this.state.cartItems,
        addToCart: this.addToCart
      }}>
        { this.props.children }
        <div style={
          {padding:'15px'}
        }>
        <table className='c'>
          
          <tr className='thead'>
            <th>ID</th>
            <th>NAME</th>
            <th>QUANTITY</th>
            <th>ACTIONS</th>
          </tr>
         
        </table>
        </div>
      </CartContext.PesananStudent>
      
    )

  }
}
