import {
  FETCH_HOME_DATA_LOADING,
  FETCH_HOME_DATA,
  FETCH_HOME_DATA_ID,
  FETCH_HOME_DATA_NAME,
  FETCH_HOME_DATA_PIN, 
  FETCH_HOME_DATA_ERROR
} from './homeData.actionType'

const initialState = {
  fectHomeDataLoading: true,
  homeId: '',
  homeName: '',
  homePin: ['','','','','',''],
  owner: '',
  users: [],
  sensors: [],
  logs: [],
  fectHomeDataError: false,
}

const reducers = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_DATA:{
      return {
        ...state,
        fectHomeDataLoading: false
      }}
    case FETCH_HOME_DATA_ID:
      return {
        ...state,
        homeId: action.payload
      }
    case FETCH_HOME_DATA_NAME:
      return {
        ...state,
        homeName: action.payload
      }
    case FETCH_HOME_DATA_PIN:
      return {
        ...state,
        homePin: action.payload
      }
    case FETCH_HOME_DATA_LOADING:
      return {
        ...state,
        fectHomeDataLoading: true
      }
    case FETCH_HOME_DATA_LOADING:
      return {
        ...state,
        fectHomeDataLoading: false,
        fectHomeDataError: true
      }
    default:
      return state
  }
}

export default reducers