import React from 'react'

const Cart = ({ cart }) => (
  <div>
    <h2>Cart</h2>
    <ul>
      {Object.entries(cart).map(([id, quantity]) => (
        <li key={id}>{id}: {quantity}</li>
      ))}
    </ul>
  </div>
)

export default Cart
