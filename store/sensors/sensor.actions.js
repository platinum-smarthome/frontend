import { 
  GET_SENSOR_STATUS_SUCCESS, 
  GET_SENSOR_STATUS_LOADING, 
  UPDATE_SENSOR_STATUS,
  DISABLE_ALL_SENSORS,
  ENABLE_ALL_SENSORS
} from './sensor.actionType'
import firebase from 'firebase'
import { database } from '../../firebase/firebase'
import { homeUnlock, homePinAccessSuccess } from '../housePin/housePin.actions'

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
        checkSensorStatus()
        dispatch(updateSensorStatusSuccess())
      })
  }
}


export const disableSensors = () => {
  return dispatch => {
    database().ref('/smarthome/sensors/door').set(0)
    database().ref('/smarthome/sensors/garage').set(0)
    database().ref('/smarthome/sensors/gas').set(0)
      .then(() => {
        dispatch(disableAllSensors())
      })
  }
} 

export const enableSensors = () => {
  return dispatch => {
    database().ref('/smarthome/sensors/door').set(1)
    database().ref('/smarthome/sensors/garage').set(1)
    database().ref('/smarthome/sensors/gas').set(1)
      .then(() => {
        dispatch(enableAllSensors())
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

const disableAllSensors = () => ({
  type: DISABLE_ALL_SENSORS
})

const enableAllSensors = () => ({
  type: ENABLE_ALL_SENSORS
})