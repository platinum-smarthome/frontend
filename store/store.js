import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './rootReducer'
import logger from 'redux-logger'

const store = createStore(
  reducers,
  applyMiddleware(thunk)
  // applyMiddleware(thunk, logger)
)

export default store