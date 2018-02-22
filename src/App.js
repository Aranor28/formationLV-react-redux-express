import React, { Component } from 'react';
import './App.css';

import PageProducts from './components/products.component';
import Cart from './components/cart.component';

class App extends Component {
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
        <PageProducts />
        <Cart />
      </div>
    );
  }
}

export default App;
