import { combineReducers } from 'redux'

import pizzas from './pizzas.js'
import filters from './filters.js'

const rootReducer = combineReducers({
  filters: filters,
  pizzas // т.к. имена свойств и значений совпадают, запись можно упростить
});

export default rootReducer;