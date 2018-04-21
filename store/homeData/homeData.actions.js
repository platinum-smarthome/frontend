import {
  FETCH_HOME_DATA_LOADING,
  FETCH_HOME_DATA,
  FETCH_HOME_DATA_ERROR
} from './homeData.actionType'
import firebase from 'firebase'
import { database } from '../../firebase/firebase';
import { searchUser } from '../userData/userData.actions'
import { fetchNotificationLogsSuccess } from '../notificationLogs/notificationLogs.actions'
import { getSensorStatusSuccess } from '../sensors/sensor.actions'

export const fetchHomeData = () => {
  return dispatch => {
    dispatch(fetchHomeDataLoading())
    database().ref(`/smarthome`).once('value', (snap) => {
      let data = snap.val()
      dispatch(fetchHomeDataSuccess(data))
      dispatch(searchUser(data.users))
      dispatch(fetchNotificationLogsSuccess(Object.values(data.logs).reverse()))
    }, (err) => { dispatch(fetchHomeDataError()) })
  }
}

const fetchHomeDataSuccess = (payload) => {
  return {
    type: FETCH_HOME_DATA,
    payload: payload
  }
}

const fetchHomeDataLoading = () => ({
  type: FETCH_HOME_DATA_LOADING,
})

const fetchHomeDataError = () => ({
  type: FETCH_HOME_DATA_ERROR
})