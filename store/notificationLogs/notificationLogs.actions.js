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

// export const processNotificationsLogs = (data) => {
//   let logs = Object.values(data.logs).reverse()
//   let countNotif = 0
//   for(let i = 0; i<logs.length; i++) {
//     if(logs[i].createdAt > data.lastSeen) { countNotif += 1 }
//     else { i = logs.length }
//   }
//   let payload = {
//     logs: [ ...logs ],
//     newNotifications: countNotif
//   }
//   return {
//     type: FETCH_NOTIFICATION_LOGS,
//     payload: payload
//   }
// }

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