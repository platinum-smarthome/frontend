import { GET_SENSOR_STATUS_SUCCESS, GET_SENSOR_STATUS_LOADING, UPDATE_SENSOR_STATUS } from './sensor.actionType'
import firebase from 'firebase'
import { database } from '../../firebase/firebase'

export const getSensorStatus = () => {
  return dispatch => {
    dispatch(getSensorStatusLoading())
    database().ref('/smarthome/sensors').on('value', (snap) => {
      let data = snap.val()
      dispatch(getSensorStatusSuccess(data))
    }, (err) => {    
      console.log(err)
    })
  }
}

export const updateSensorStatus = (payload) => {
  return dispatch => {
    let val = (payload.value) ? 1 : 0
    database().ref(`/smarthome/sensors/${payload.type}`).set(val)
      .then(() => {
        dispatch(updateSensorStatusSuccess())
      })
  }
}

const getSensorStatusSuccess = (payload) => ({
  type: GET_SENSOR_STATUS_SUCCESS,
  sensors: payload
})

const getSensorStatusLoading = () => ({
  type: GET_SENSOR_STATUS_LOADING
})

const updateSensorStatusSuccess = () => ({
  type: UPDATE_SENSOR_STATUS
})