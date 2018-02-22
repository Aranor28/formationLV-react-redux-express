import { createStore, combineReducers } from 'redux'

import mainReducer from './reducers/index'

export default createStore(
  combineReducers(mainReducer),
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
