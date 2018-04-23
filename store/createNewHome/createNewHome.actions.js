import firebase from 'firebase';
import Base64 from '../../helpers/hash.helper';
import { database } from '../../firebase/firebase';
import {
  CREATE_NEW_HOME_HANDLE_INPUT_CHANGE,
  CREATE_NEW_HOME_LOADING,
  CREATE_NEW_HOME_SUCCESS,
  CREATE_NEW_HOME_ERROR,
  SET_CREATE_NEW_HOME_MESSAGE
} from './createNewHome.actionType';
import { createNewUserSuccess } from '../addNewUser/addNewUser.actions'

export const createNewHomeHandleInputChange = (payload) => {
  return {
    type: CREATE_NEW_HOME_HANDLE_INPUT_CHANGE,
    payload: payload
  }
};

export const createNewHome = (payload) => {
  return dispatch => {
    dispatch(createNewHomeLoading())
    key  = database().ref(`/smarthome`).push().key;
    payload.user.LastSeen = database.ServerValue.TIMESTAMP
    let newHome = {
      homeId: key,
      homeName: Base64.encode(payload.homeName),
      homePin: payload.homePin,
      owner: payload.user.deviceId,
      sensors: [],
      users: {
        [payload.user.deviceId]: payload.user
      },
      logs: []
    }
    database().ref(`/smarthome`).set(newHome)
    .then(() => {
      dispatch(createNewHomeSuccess());
      dispatch(createNewUserSuccess())
    })
    .catch((err) => { dispatch(createNewHomeError()) });
  }
};

export const setCreateNewHomeMessage = (payload) => {
  return {
    type: SET_CREATE_NEW_HOME_MESSAGE,
    payload: payload
  }
}

const createNewHomeLoading = () => ({
  type: CREATE_NEW_HOME_LOADING,
});

const createNewHomeSuccess = () => ({
  type: CREATE_NEW_HOME_SUCCESS,
});

const createNewHomeError = () => ({
  type: CREATE_NEW_HOME_ERROR,
});