export const PRODUCTS_FETCH_START = 'PRODUCTS_FETCH_START'
export const PRODUCTS_FETCH_SUCCESS = 'PRODUCTS_FETCH_SUCCESS'
export const PRODUCTS_FETCH_ERROR = 'PRODUCTS_FETCH_ERROR'

export const fetchProducts = () => async dispatch => {
  dispatch({ type: PRODUCTS_FETCH_START })

  try {
    const response = await fetch('http://localhost:5000/products')
    const data = await response.json()
  
    dispatch({ type: PRODUCTS_FETCH_SUCCESS, data })
  } catch (e) {
    dispatch({ type: PRODUCTS_FETCH_ERROR })
  }
}
