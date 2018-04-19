import firebase from 'firebase';

import {
  CREATE_NEW_USER_HANDLE_INPUT_CHANGE,
  CREATE_NEW_USER_LOADING,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_ERROR
} from './addNewUser.actionType';
import { database } from '../../firebase/firebase';

export const createNewUserHandleInputChange = (payload) => {
  return {
    type: CREATE_NEW_USER_HANDLE_INPUT_CHANGE,
    payload: payload
  }
};

export const createNewUser = (payload) => {
  return dispatch => {
    dispatch(createNewUserLoading())
    payload.user.lastSeen = database.ServerValue.TIMESTAMP;
    database().ref(`/smarthome/users/${payload.user.deviceId}`).set(payload.user)
    .then(() => { dispatch(createNewUserSuccess()); })
    .catch((err) => { dispatch(createNewUserError()) });
  }
};

const createNewUserLoading = () => ({
  type: CREATE_NEW_USER_LOADING,
});

export const createNewUserSuccess = () => ({
  type: CREATE_NEW_USER_SUCCESS,
});

const createNewUserError = () => ({
  type: CREATE_NEW_USER_ERROR,
});