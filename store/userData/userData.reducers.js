import {
  FETCH_USER_DATA_LOADING,
  FETCH_USER_DATA,
  FETCH_USER_DATA_ERROR
} from './userData.actionType'

const initialState = {
  fectUserDataLoading: true,
  username: '',
  deviceId: '',
  pin: '',
  email: '',
  lastSeen: '',
  fectUserDataError: false,
}

const reducers = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA:{
      return {
        ...state,
        ...action.payload,
        fectUserDataLoading: false
      }}
    case FETCH_USER_DATA_LOADING:
      return {
        ...state,
        fectUserDataLoading: true
      }
    case FETCH_USER_DATA_ERROR:
      return {
        ...state,
        fectUserDataLoading: false,
        fectUserDataError: true
      }
    default:
      return state
  }
}

export default reducers