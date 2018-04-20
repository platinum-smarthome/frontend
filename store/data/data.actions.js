import { 
  GET_DATA_SUCCESS,
  GET_DATA_LOADING,
  GET_DATA_ERROR,
  DEVICE_PIN_INPUT_UPDATE,
  DEVICE_PIN_INPUT_REMOVE,
  USER_LOGIN_SUCCESS,
} from './data.actionType'
import firebase from 'firebase'
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
    if (payload.input.join('') === payload.userPin ) {
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