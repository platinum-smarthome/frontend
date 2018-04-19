import {
  FETCH_USER_DATA_LOADING,
  FETCH_USER_DATA,
  FETCH_USER_DATA_ERROR
} from './userData.actionType'
import firebase from 'firebase'
import { database } from '../../firebase/firebase';
import IMEI from 'react-native-imei';

// export const fetchUserData = (payload) => {
//   return dispatch => {
//     dispatch(fetchUserDataLoading())
//     database().ref(`/smarthome/users`).once('value', (snap) => {
//       let data = snap.val()
//       dispatch(fetchUserDataSuccess(data))
//     }, (err) => { dispatch(fetchUserDataError()) })
//   }
// }

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