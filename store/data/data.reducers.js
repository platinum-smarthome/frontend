import {
  DEVICE_PIN_INPUT_UPDATE,
  DEVICE_PIN_INPUT_REMOVE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from './data.actionType'
import { devicePinUpdate } from './data.actions';

const initialState = {
  userLogin: false,
  devicePin: ['','', '', '', '', '']
}

const reducers = (state=initialState, action) => {
  switch (action.type) {
    case DEVICE_PIN_INPUT_UPDATE:
      return {
        ...state,
        devicePin: action.payload
      }
    case DEVICE_PIN_INPUT_REMOVE:
      return initialState
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        userLogin: true
      }
    case USER_LOGOUT:
      return {
        ...state,
        userLogin: false
      }
    default:
      return state
  }
}

export default reducers