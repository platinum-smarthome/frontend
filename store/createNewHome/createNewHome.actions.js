import firebase from 'firebase';

import { database } from '../../firebase/firebase';
import {
  CREATE_NEW_HOME_HANDLE_INPUT_CHANGE,
  CREATE_NEW_HOME_LOADING,
  CREATE_NEW_HOME_SUCCESS,
  CREATE_NEW_HOME_ERROR
} from './createNewHome.actionType';
import { createNewUserSuccess } from '../addNewUser/addNewUser.actions'

export const createNewHomeHandleInputChange = (payload) => {
  console.log('actions', payload)
  return {
    type: CREATE_NEW_HOME_HANDLE_INPUT_CHANGE,
    payload: payload
  }
};

export const createNewHome = (payload) => {
  return dispatch => {
    dispatch(createNewHomeLoading())
    key  = database().ref(`/smarthome`).push().key;
    let newHome = {
      homeName: payload.homeName,
      owner: payload.user.deviceId,
      panels: [],
      users: {
        [payload.user.deviceId]: payload.user
      }
    }
    database().ref(`/smarthome/${key}`).set(newHome)
    .then(() => {
      dispatch(createNewHomeSuccess());
      dispatch(createNewUserSuccess())
    })
    .catch((err) => { dispatch(createNewHomeError()) });
  }
};

const createNewHomeLoading = () => ({
  type: CREATE_NEW_HOME_LOADING,
});

const createNewHomeSuccess = () => ({
  type: CREATE_NEW_HOME_SUCCESS,
});

const createNewHomeError = () => ({
  type: CREATE_NEW_HOME_ERROR,
});