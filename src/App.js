import React, { Component } from 'react';
import './App.css';

import PageProducts from './components/products.component';
import Cart from './components/cart.component';

class App extends Component {
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
