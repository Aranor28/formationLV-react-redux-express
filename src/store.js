import { createStore, combineReducers } from 'redux'

import mainReducer from './reducers/index'

export default createStore(combineReducers(mainReducer))
