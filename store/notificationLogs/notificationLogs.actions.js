import {
  FETCH_NOTIFICATION_LOGS_LOADING,
  FETCH_NOTIFICATION_LOGS,
  FETCH_NOTIFICATION_LOGS_ERROR,
  UPDATE_LAST_NOTIFIED
} from './notificationLogs.actionType'
import { dateDisplayFormater } from '../../helpers/date.helper'
import { database } from '../../firebase/firebase'
import PushNotification from '../../helpers/notification.helper'

// export const fetchNotificationLogs = (payload) => {
//   return dispatch => {
//     dispatch(fetchNotificationLogsLoading())
//     database().ref(`/smarthome/logs`).on('value', (snap) => {
//       let data = snap.val()
//       dispatch(fetchNotificationLogsSuccess(data))
//     }, (err) => { dispatch(fetchNotificationLogsError()) })
//   }
// }

export const watchNotification = (lastNotified) => { 
  return dispatch => {
    dispatch(fetchNotificationLogsLoading())
    database().ref(`/smarthome/logs`).on('value', (snaphot) => {
      let val = snaphot.val()
      if(val) {
        val = Object.values(snaphot.val()).reverse()
        if(val[0].createdAt > lastNotified) {
          lastNotified = val[0].createdAt
          let notificationMessage = {
            id: lastNotified,
            largeIcon: "ic_launcher",
            smallIcon: "ic_launcher",
            autoCancel: true,
            bigText: `${ val[0].description }`,
            subText: `${ dateDisplayFormater(val[0].createdAt) }`,
            vibrate: true,
            vibration: 300,
            title: "Fortress - Smart Home Security",
            message: `${ val[0].title }`,
          }
          PushNotification.localNotification(notificationMessage);
          dispatch(updateLastNotified(val[0].createdAt))
        }
      } else {
        val = []
      }
      dispatch(fetchNotificationLogsSuccess(val))
    }, (err) => { dispatch(fetchNotificationLogsError()) })
  }
}

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

export const updateLastNotified = (payload) => {
  return {
    type: UPDATE_LAST_NOTIFIED,
    payload: payload
  }
}