import React from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = state => ({
  cart: state.cart,
})

export default connect(mapStateToProps)(Cart)
