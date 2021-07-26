const initialState = {
  category: null,
  sortBy: 'rating', // один из ['popupar','rating','alphabet','price']
  sortOrder: 'asc' // asc/desc - по возрастанию/убыванию
}

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SORT_BY':
      return { ...state, sortBy: action.payload };
    case 'SET_CATEGORY':
      return { ...state, category: action.payload };
    case 'SWITCH_SORT_ORDER':
      return { ...state, sortOrder: state.sortOrder === 'asc' ? 'desc' : 'asc' };
    default:
      return state;
  }
}

export default filters;