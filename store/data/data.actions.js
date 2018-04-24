import { 
  GET_DATA_SUCCESS,
  GET_DATA_LOADING,
  GET_DATA_ERROR,
  DEVICE_PIN_INPUT_UPDATE,
  DEVICE_PIN_INPUT_REMOVE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from './data.actionType'
import firebase from 'firebase'
import Base64 from '../../helpers/hash.helper'
import { database } from '../../firebase/firebase'

export const getData = () => {
  return dispatch => {
    dispatch(getDataLoading())
    database().ref(`/smarthome`).once('value', (snap) => {
      let data = snap.val()
      dispatch(getDataSuccess(data))
    }, (err) => {
      dispatch(getDataError())
    })
  }
}

export const devicePinUpdate = (payload) => {
  return dispatch => {
    dispatch(devicePinUpdateSuccess(payload.input))
    if (payload.input.join('') === Base64.decode(payload.userPin) && payload.input.join('').length === 6) {
      dispatch(devicePinRemove())
      dispatch(userLoginSuccess())
    } else if ( payload.input[5]) {
      dispatch(devicePinRemove())
    }
  }
}

const getDataSuccess = (payload) => ({
  type: GET_DATA_SUCCESS,
  data: payload
})

const getDataLoading = () => ({
  type: GET_DATA_LOADING,
})

const getDataError = () => ({
  type: GET_DATA_ERROR
})

const devicePinUpdateSuccess = (payload) => ({
  type: DEVICE_PIN_INPUT_UPDATE,
  key: payload
})
const devicePinRemove = (payload) => ({
  type: DEVICE_PIN_INPUT_REMOVE,
})

const userLoginSuccess = (payload) => ({
  type: USER_LOGIN_SUCCESS,
})

export const userLogout = () => {
  console.log('LOGOUT')
  return { type: USER_LOGOUT }
}