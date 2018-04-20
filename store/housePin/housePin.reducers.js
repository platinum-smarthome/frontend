import {
  HOMEPIN_UPDATE,
  HOMEPIN_REMOVE,
  HOMEPIN_ACCESS_UNLOCK,
  HOMEPIN_ACCESS_LOCK,
  GET_HOMEPIN
} from './housePin.actionType'

const initialState = {
  loading: false,
  housePin: ['', '', '', '', '', ''],
  houseLock: true
}

const reducers = (state=initialState, action) => {
  switch (action.type) {
    case GET_HOMEPIN:
      return {
        ...state,
        loading: false
      }
    case HOMEPIN_UPDATE:{
      return {
        ...state,
        housePin: [ ...action.housePin ]
      }}
    case HOMEPIN_REMOVE: 
      return {
        ...state,
        housePin: ['','', '', '', '', '']
      }
    case HOMEPIN_ACCESS_LOCK:
      return {
        ...state,
        houseLock: true
      }
    case HOMEPIN_ACCESS_UNLOCK:
      return {
        ...state,
        houseLock: false
      }
    default:
      return state
  }
}

export default reducers