import React from 'react';
import PropTypes from 'prop-types'

const ProductsPage = ({ productList, onAddProduct, onRemoveProduct }) => (
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

ProductsPage.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddProduct: PropTypes.func.isRequired,
  onRemoveProduct: PropTypes.func.isRequired,
}

export default ProductsPage;
