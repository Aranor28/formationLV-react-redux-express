import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../actions/products.actions';
import { addItemToCart, removeItemFromCart } from '../actions/cart.actions';

class ProductsPage extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const { productList, onAddProduct, onRemoveProduct } = this.props

    return (
      <div>
        <h1>Products list</h1>
        <ul>
          {productList.map(product => (
            <li key={product.id}>
              {product.name} - {product.price}€
              <button onClick={() => onAddProduct(product.id)}>+</button>
              <button onClick={() => onRemoveProduct(product.id)}>-</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

ProductsPage.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddProduct: PropTypes.func.isRequired,
  onRemoveProduct: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  productList: state.products,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  onAddProduct: addItemToCart,
  onRemoveProduct: removeItemFromCart,
  fetchProducts,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
