const initalState = {
  items: {},
  totalPrice: 1,
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
      return ({
        ...state,
        items: {
          ...state.items,
          [id]: !state.items[id] || state.items[id].length === 0 ? [action.payload] : [...state.items[id], action.payload]
        }
      })
    default:
      return state;
  }

}

export default cart;