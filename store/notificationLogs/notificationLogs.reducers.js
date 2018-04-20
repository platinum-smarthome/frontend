import {
  FETCH_NOTIFICATION_LOGS_LOADING,
  FETCH_NOTIFICATION_LOGS,
  FETCH_NOTIFICATION_LOGS_ERROR
} from './notificationLogs.actionType'

const initialState = {
  fectNotificationLogsLoading: false,
  logs: [],
  fectNotificationLogsError: false,
}

const reducers = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATION_LOGS:{
      return {
        ...state,
        logs: [ ...action.payload ],
        fectNotificationLogsLoading: false
      }}
    case FETCH_NOTIFICATION_LOGS_LOADING:
      return {
        ...state,
        fectNotificationLogsLoading: true
      }
    case FETCH_NOTIFICATION_LOGS_ERROR:
      return {
        ...state,
        fectNotificationLogsLoading: false,
        fectNotificationLogsError: true
      }
    default:
      return state
  }
}

export default reducers