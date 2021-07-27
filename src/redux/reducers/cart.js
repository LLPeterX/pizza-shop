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
      return {
        ...state,
        items: { [action.payload.id]: [...state.items, action.payload] }
      }
    default:
      return state;
  }

}

export default cart;