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
  /* istanbul ignore next */
  return dispatch => {
    /* istanbul ignore next */
    dispatch(getSensorStatusLoading())
    /* istanbul ignore next */
    database().ref('/smarthome/sensors').on('value', (snap) => {
      let data = snap.val()
      /* istanbul ignore next */
      dispatch(getSensorStatusSuccess(data))
    }, (err) => {    
      console.log(err)
    })
  }
}

export const updateSensorStatus = (payload) => {
  /* istanbul ignore next */
  return dispatch => {
    /* istanbul ignore next */
    let val = (payload.value) ? 1 : 0
    /* istanbul ignore next */
    database().ref(`/smarthome/sensors/${payload.type}`).set(val)
    .then(() => {
        /* istanbul ignore next */
        checkSensorStatus()
        /* istanbul ignore next */
        dispatch(updateSensorStatusSuccess())
      })
  }
}


export const disableSensors = () => {
  return dispatch => {
    /* istanbul ignore next */
    database().ref('/smarthome/sensors/door').set(0)
    /* istanbul ignore next */
    database().ref('/smarthome/sensors/garage').set(0)
    /* istanbul ignore next */
    database().ref('/smarthome/sensors/gas').set(0)
      .then(() => {
        /* istanbul ignore next */
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
        /* istanbul ignore next */
        dispatch(enableAllSensors())
      })
  }
}

const getSensorStatusSuccess = (payload) => ({
  type: GET_SENSOR_STATUS_SUCCESS,
  payload: payload
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