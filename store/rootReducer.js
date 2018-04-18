import { combineReducers } from 'redux'
import Data from './data/data.reducers'

const reducers = combineReducers({
  data: Data
})

export default reducers