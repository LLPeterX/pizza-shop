export const setTotalPrice = (price) => ({ type: 'SET_TOTAL_PRICE', payload: price });
export const setTotalCount = (count) => ({ type: 'SET_TOTAL_COUNT', payload: count });
export const addPizzaToCart = (pizza) => ({ type: 'ADD_TO_CART', payload: pizza });
export const removePizzaFromCart = (pizza) => ({ type: 'REMOVE_FROM_CART', payload: pizza });
export const deleteOrder = (pizza) => ({ type: 'DELETE_ORDER', payload: pizza });
export const clearCart = (pizza) => ({ type: 'CLEAR_CART' });