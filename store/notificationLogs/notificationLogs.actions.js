import {
  FETCH_NOTIFICATION_LOGS_LOADING,
  FETCH_NOTIFICATION_LOGS,
  FETCH_NOTIFICATION_LOGS_ERROR
} from './notificationLogs.actionType'
import firebase from 'firebase'
import { database } from '../../firebase/firebase'

// export const fetchNotificationLogs = (payload) => {
//   return dispatch => {
//     dispatch(fetchNotificationLogsLoading())
//     database().ref(`/smarthome/logs`).on('value', (snap) => {
//       let data = snap.val()
//       dispatch(fetchNotificationLogsSuccess(data))
//     }, (err) => { dispatch(fetchNotificationLogsError()) })
//   }
// }

export const notificationsDelete = (payload) => {
  database().ref(`/smarthome/logs/${payload}`).set(null)
}

export const fetchNotificationLogsSuccess = (payload) => {
  return {
    type: FETCH_NOTIFICATION_LOGS,
    payload: payload
  }
}

const fetchNotificationLogsLoading = () => ({
  type: FETCH_NOTIFICATION_LOGS_LOADING,
})

const fetchNotificationLogsError = () => ({
  type: FETCH_NOTIFICATION_LOGS_ERROR
})