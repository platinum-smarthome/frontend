import {
  DEVICE_PIN_INPUT_UPDATE,
  DEVICE_PIN_INPUT_REMOVE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from './data.actionType'
import Base64 from '../../helpers/hash.helper'

export const devicePinUpdate = (payload) => {
  return dispatch => {
    dispatch(devicePinUpdateSuccess(payload.input))
    if (payload.input.join('') === Base64.decode(payload.userPin) && payload.input.join('').length === 6) {
      dispatch(devicePinRemove())
      dispatch(userLoginSuccess())
    } else if ( payload.input[5] ) {
      dispatch(devicePinRemove())
    }
  }
}

const devicePinUpdateSuccess = (payload) => ({
  type: DEVICE_PIN_INPUT_UPDATE,
  payload: payload
})
const devicePinRemove = (payload) => ({
  type: DEVICE_PIN_INPUT_REMOVE,
})

const userLoginSuccess = (payload) => ({
  type: USER_LOGIN_SUCCESS,
})

export const userLogout = () => {
  return { type: USER_LOGOUT }
}