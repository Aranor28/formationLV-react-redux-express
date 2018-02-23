import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../actions/cart.actions';

const initialState = {}

export default (state = initialState, action) => {
  switch(action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        [action.id]: (state[action.id] || 0) + 1,
      }
    case CART_REMOVE_ITEM:
      const newCart = {
        ...state,
        [action.id]: (state[action.id] || 0) - 1
      }

      if (newCart[action.id] <= 0) {
        delete newCart[action.id];
      }
      
      return newCart
    default:
      return state
  }
}
