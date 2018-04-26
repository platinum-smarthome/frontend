import {
  FETCH_USER_DATA_LOADING,
  FETCH_USER_DATA,
  FETCH_USER_DATA_ERROR
} from './userData.actionType'
import { database } from '../../firebase/firebase';
import IMEI from 'react-native-imei';

export const searchUser = (payload) => {
  return dispatch => {
    dispatch(fetchUserDataLoading())
    payload = Object.values(payload);
    payload.forEach((user) => {
      if(user.deviceId === IMEI.getImei()) {
        return dispatch(fetchUserDataSuccess(user))
      }
    })
  }
}

export const updateLastSeen = (payload) => {
  database().ref(`/smarthome/users/${payload}/lastSeen`).set(database.ServerValue.TIMESTAMP)
}

const fetchUserDataSuccess = (payload) => {
  return {
    type: FETCH_USER_DATA,
    payload: payload
  }
}

const fetchUserDataLoading = () => ({
  type: FETCH_USER_DATA_LOADING,
})

const fetchUserDataError = () => ({
  type: FETCH_USER_DATA_ERROR
})