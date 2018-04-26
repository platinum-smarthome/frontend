import {
  FETCH_HOME_DATA_LOADING,
  FETCH_HOME_DATA,
  FETCH_HOME_DATA_ID,
  FETCH_HOME_DATA_NAME,
  FETCH_HOME_DATA_PIN,  
  FETCH_HOME_DATA_ERROR
} from './homeData.actionType'
import firebase from 'firebase'
import { database } from '../../firebase/firebase'
import { searchUser } from '../userData/userData.actions'
import { fetchNotificationLogsSuccess } from '../notificationLogs/notificationLogs.actions'
import { getSensorStatusSuccess } from '../sensors/sensor.actions'

export const fetchHomeData = () => {
  return dispatch => {
    dispatch(fetchHomeDataLoading())  
    database().ref(`/smarthome/homePin`).on('value', (snapshot) => {
      let val = snapshot.val()
      dispatch(fetchHomeDataPin(val))
      database().ref(`/smarthome/homeId`).on('value', (snapshot) => {
        let val = snapshot.val()
        dispatch(fetchHomeDataId(val))
        database().ref(`/smarthome/homeName`).on('value', (snapshot) => {
          let val = snapshot.val()
          dispatch(fetchHomeDataName(val))
          dispatch(fetchHomeDataSuccess())
        }, (err) => { dispatch(fetchHomeDataError()) })
      }, (err) => { dispatch(fetchHomeDataError()) })
    }, (err) => { dispatch(fetchHomeDataError()) })
  }
}

const fetchHomeDataSuccess = () => {
  return {
    type: FETCH_HOME_DATA
  }
}

const fetchHomeDataPin = (payload) => {
  return {
    type: FETCH_HOME_DATA_PIN,
    payload: payload
  }
}

const fetchHomeDataName = (payload) => {
  return {
    type: FETCH_HOME_DATA_NAME,
    payload: payload
  }
}

const fetchHomeDataId = (payload) => {
  return {
    type: FETCH_HOME_DATA_ID,
    payload: payload
  }
}

const fetchHomeDataLoading = () => ({
  type: FETCH_HOME_DATA_LOADING,
})

const fetchHomeDataError = () => ({
  type: FETCH_HOME_DATA_ERROR
})