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
  /* istanbul ignore next */
  return dispatch => {
    /* istanbul ignore next */
    dispatch(fetchNotificationLogsLoading())
    /* istanbul ignore next */
    database().ref(`/smarthome/logs`).on('value', (snaphot) => {
      /* istanbul ignore next */
      let val = snaphot.val()
      /* istanbul ignore next */
      if(val) {
        val = Object.values(snaphot.val()).reverse()
        /* istanbul ignore next */
        if(val[0].createdAt > lastNotified) {
          lastNotified = val[0].createdAt
          /* istanbul ignore next */
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
          /* istanbul ignore next */
          PushNotification.localNotification(notificationMessage);
          /* istanbul ignore next */
          dispatch(updateLastNotified(val[0].createdAt))
        }
      } else {
        /* istanbul ignore next */
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
  /* istanbul ignore next */
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
  /* istanbul ignore next */
  return {
    type: UPDATE_LAST_NOTIFIED,
    payload: payload
  }
}