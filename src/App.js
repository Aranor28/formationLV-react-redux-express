import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PageProducts from './components/products.component';
import Cart from './components/cart.component';

class App extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      cart: {},
      productList: [{
        id: 1,
        name: 'Fancy Shoes',
        price: 24.50,
      }],
    }
  }

  addProduct = (id) => {
    this.setState({
      cart: {
        ...this.state.cart,
        [id]: (this.state.cart[id] || 0) + 1,
      },
    })
  }

  removeProduct = (id) => {
    const newCart = {
      ...this.state.cart,
      [id]: (this.state.cart[id] || 0) - 1
    }

    if (newCart[id] <= 0) {
      delete newCart[id];
    }

    this.setState({ cart: newCart })
  }

  render() {
    return (
      <div className="App">
        <PageProducts
          productList={this.state.productList}
          onAddProduct={this.addProduct}
          onRemoveProduct={this.removeProduct}
        />
        <Cart cart={this.state.cart} />
      </div>
    );
  }
}

export default App;
