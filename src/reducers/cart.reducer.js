import { CART_ADD_ITEM } from '../actions/cart.actions';

const initialState = {}

export default (state = initialState, action) => {
  switch(action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        [action.id]: (state[action.id] || 0) + 1,
      }
    default:
      return state
  }
}
