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
    default:
      return state;
  }

}

export default cart;