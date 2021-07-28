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
      let itemsArray = state.items[action.payload.id] || [];
      console.log('ADD_TO_CART:', action.payload, 'sa=', itemsArray);
      return {
        ...state,
        // items: {
        //   [action.payload.id]: [...state.items[action.payload.id], action.payload]
        // }
        items: {
          [action.payload.id]: (state.items[action.payload.id]
            ? [...state.items[action.payload.id], action.payload]
            : [action.payload])
        }

        // items: {
        //   [action.payload.id]: [...itemsArray, action.payload]
        // }
      }
    default:
      return state;
  }

}

export default cart;