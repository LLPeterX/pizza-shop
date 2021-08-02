export const addPizzaToCart = (pizza) => ({ type: 'ADD_TO_CART', payload: pizza });
export const removePizzaFromCart = (pizza) => ({ type: 'REMOVE_FROM_CART', payload: pizza });
export const deleteOrder = (pizza) => ({ type: 'DELETE_ORDER', payload: pizza });
export const clearCart = () => ({ type: 'CLEAR_CART' });