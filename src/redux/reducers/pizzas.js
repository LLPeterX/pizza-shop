const initalState = {
  items: [],
  isLoaded: false
}

const pizzas = (state = initalState, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return { ...state, items: action.payload };
    case 'SET_LOADED':
      return { ...state, isLoaded: true };
    default:
      return state;
  }
}

export default pizzas;

