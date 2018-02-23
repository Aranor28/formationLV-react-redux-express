export const CART_ADD_ITEM = 'CART_ADD_ITEM'
export const addItemToCart = id => ({
  type: CART_ADD_ITEM,
  id,
})

export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM'
export const removeItemFromCart = id => ({
  type: CART_REMOVE_ITEM,
  id,
})
