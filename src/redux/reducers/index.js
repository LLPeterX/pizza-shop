import { combineReducers } from 'redux'

import pizzas from './pizzas.js'
import filters from './filters.js'
import cart from './cart'

const rootReducer = combineReducers({
  filters,
  pizzas, // т.к. имена свойств и значений совпадают, запись можно упростить
  cart
});

export default rootReducer;