// @flow
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import stuff from './stuffReducer'
import colors from './colorsReducer'

const rootReducer = combineReducers({
  stuff,
  colors,
  router: routerReducer
})

export default rootReducer
