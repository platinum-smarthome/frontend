import { 
  GET_ALARMS_STATUS_SUCCESS, 
  GET_ALARMS_STATUS_LOADING,
  GET_ALARMS_STATUS_ERROR
} from './alarms.actionType'
import { database } from '../../firebase/firebase'

export const getAlarmsStatus = () => {
  return dispatch => {
    dispatch(getAlarmsStatusLoading())
    database().ref('/smarthome/alarms').on('value', (snap) => {
      let val = snap.val()
      dispatch(getAlarmsStatusSuccess(val))
    }, (err) => {
      dispatch(getSAlarmsStatusError(val))
    })
  }
}

const getAlarmsStatusSuccess = (payload) => ({
  type: GET_ALARMS_STATUS_SUCCESS,
  payload: payload
})

const getAlarmsStatusLoading = () => ({
  type: GET_ALARMS_STATUS_LOADING
})

const getSAlarmsStatusError = () => ({
  type: GET_ALARMS_STATUS_ERROR
})