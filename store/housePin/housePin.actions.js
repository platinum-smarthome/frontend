import {
  HOMEPIN_UPDATE,
  HOMEPIN_REMOVE,
  HOMEPIN_ACCESS_UNLOCK,
  HOMEPIN_ACCESS_LOCK,
  GET_HOMEPIN
} from './housePin.actionType'
import { disableSensors, enableSensors } from '../sensors/sensor.actions'
import Base64 from '../../helpers/hash.helper';

export const loadHomePin = () => {
  return dispatch => {
    dispatch(getHomePinSuccess())
  }
}

export const homePinUpdate = (payload) => {
  return dispatch => {
    dispatch(homePinUpdateSuccess(payload.input))
    if(payload.input.join('') === Base64.decode(payload.homePin) && payload.input.join('').length === 6) {
      dispatch(homePinRemove())
      dispatch(homePinAccessSuccess())
      dispatch(disableSensors())
    } else if (payload.input[5]) {
      dispatch(homePinRemove())
    }
  }
}

export const homeLock = () => {
  return dispatch => {
    dispatch(homePinAccessDisable())
    dispatch(enableSensors())
  }
}

export const homeUnlock = () => {
  return dispatch => {
    dispatch(homePinAccessSuccess())
  }
}

const getHomePinSuccess = () => {
  return {
    type: GET_HOMEPIN
  }
}

const homePinUpdateSuccess = (payload) => {
  return {
    type: HOMEPIN_UPDATE,
    payload: payload
  }
}

const homePinRemove = () => ({
  type: HOMEPIN_REMOVE
})

export const homePinAccessSuccess = () => ({
  type: HOMEPIN_ACCESS_UNLOCK
})

const homePinAccessDisable = () => ({
  type: HOMEPIN_ACCESS_LOCK
})
