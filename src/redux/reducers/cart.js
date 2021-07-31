const initalState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
}


const cart = (state = initalState, action) => {
  switch (action.type) {
    case 'SET_TOTAL_PRICE':
      return { ...state, totalPrice: action.payload };
    case 'SET_TOTAL_COUNT':
      return { ...state, totalCount: action.payload };
    case 'ADD_TO_CART':
      {
        const id = action.payload.id;
        const newItems = {
          ...state.items,
          [id]: !state.items[id] ? [action.payload] : [...state.items[id], action.payload]
        };
        // вычисление общего количества и цены
        const itemsValues = Object.values(newItems).flat(); // массив массивов объектов пицц
        const totalCount = itemsValues.length;
        const totalPrice = itemsValues.reduce((sum, item) => sum + item.price, 0);
        return {
          ...state,
          items: newItems,
          // totalCount: state.totalCount + 1,
          // totalPrice: state.totalPrice + action.payload.price
          totalCount, totalPrice
        }
      }
    case 'REMOVE_FROM_CART': // decrease count of pizzas in cart
      const { id, type, size, price } = action.payload;
      const removeIndex = state.items[id].findIndex(item => item.type === type && item.size === size);
      if (removeIndex < 0) {
        return state;
      }
      const newArray = [...state.items[id].slice(0, removeIndex), ...state.items[id].slice(removeIndex + 1)];
      const newItems = {
        ...state.items,
        [id]: newArray
      };
      return { ...state, items: newItems, totalCount: state.totalCount - 1, totalPrice: state.totalPrice - price };
    case 'DELETE_ORDER': // delete a row from cart (same pizza with id, type, size)
      {
        const { id, type, size } = action.payload;
        const newArray = state.items[id].filter(order => !(order.id === id && order.type === type && order.size === size))
        const newItems = { ...state.items, [id]: newArray };
        if (newItems[id].length === 0) {
          delete newItems[id];
        }
        // пересчитать totalCount
        const totalCount = Object.values(newItems).flat().length;
        const totalPrice = Object.values(newItems).flat().reduce((sum, item) => sum + item.price, 0);
        return { ...state.items, items: newItems, totalCount, totalPrice };
      }
    case 'CLEAR_CART':
      return { ...initalState };
    default:
      return state;
  }

}

export default cart;