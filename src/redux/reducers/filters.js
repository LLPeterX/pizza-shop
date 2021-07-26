const initialState = {
  category: null,
  sortBy: 'popular', // один из ['popupar','rating','alphabet','price']
  sortOrder: true // false - по убыванию, true - по возрастранию
}

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SORT_BY':
      return { ...state, sortBy: action.payload };
    case 'SET_CATEGORY':
      return { ...state, category: action.payload };
    default:
      return state;
  }
}

export default filters;