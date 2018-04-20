import { 
  GET_DATA_SUCCESS,
  GET_DATA_LOADING,
  DEVICE_PIN_INPUT_UPDATE,
  DEVICE_PIN_INPUT_REMOVE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from './data.actionType'
import { devicePinUpdate } from './data.actions';

const initialState = {
  // loading: false,
  // error: false,
  // data: [],
  userLogin: false,
  devicePin: ['','', '', '', '', '']
}

const reducers = (state=initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      }
    case GET_DATA_LOADING:
      return {
        ...state,
        loading: true
      }
    case DEVICE_PIN_INPUT_UPDATE:
      return {
        ...state,
        devicePin: action.key
      }
    case DEVICE_PIN_INPUT_REMOVE:
      return {
        ...state,
        devicePin: ['','', '', '', '', '']
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        userLogin: true
      }
    case USER_LOGOUT: return initialState
    default:
      return state
  }
}

export default reducers