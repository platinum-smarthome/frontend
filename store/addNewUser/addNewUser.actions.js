import firebase from 'firebase';
import Base64 from '../../helpers/hash.helper';

import {
  CREATE_NEW_USER_HANDLE_INPUT_CHANGE,
  CREATE_NEW_USER_LOADING,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_ERROR,
  CHECK_INPUT
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
    payload.user.lastSeen = database.ServerValue.TIMESTAMP;
    payload.user.pin = Base64.encode(payload.user.pin);
    dispatch(createNewUserLoading())
    database().ref(`/smarthome/users/${payload.user.deviceId}`).set(payload.user)
    .then(() => {
      dispatch(createNewUserSuccess());
    })
    .catch((err) => { dispatch(createNewUserError()) });
  }
};

export const sendMessage = (payload) => {
  return {
    type: CHECK_INPUT,
    payload: payload
  }
}

const createNewUserLoading = () => ({
  type: CREATE_NEW_USER_LOADING,
});

export const createNewUserSuccess = () => ({
  type: CREATE_NEW_USER_SUCCESS,
});

const createNewUserError = () => ({
  type: CREATE_NEW_USER_ERROR,
});