import {
  FETCH_HOME_DATA_LOADING,
  FETCH_HOME_DATA,
  FETCH_HOME_DATA_ERROR
} from './homeData.actionType'

const initialState = {
  fectHomeDataLoading: false,
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
        ...action.payload,
        fectHomeDataLoading: false
      }}
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