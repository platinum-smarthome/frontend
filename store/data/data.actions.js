import { 
  GET_DATA_SUCCESS,
  GET_DATA_LOADING,
  GET_DATA_ERROR,
  DEVICE_PIN_INPUT_UPDATE,
  DEVICE_PIN_INPUT_REMOVE,
  USER_LOGIN_SUCCESS
} from './data.actionType'
import firebase from 'firebase'
import { database } from '../../firebase/firebase'

export const getData = () => {
  return dispatch => {
    console.log('masuk')
    dispatch(getDataLoading())
    database().ref(`/smarthome`).once('value', (snap) => {
      let data = snap.val()
      console.log(data)
      dispatch(getDataSuccess(data))
    }, (err) => {
      dispatch(getDataError())
    })
  }
}

export const devicePinUpdate = (payload) => {
  return dispatch => {
    dispatch(devicePinUpdateSuccess(payload))
    if (payload.join('') === '123456' ) {
      dispatch(devicePinRemove())
      dispatch(userLoginSuccess())
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