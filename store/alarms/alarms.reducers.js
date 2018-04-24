import { 
  GET_ALARMS_STATUS_SUCCESS, 
  GET_ALARMS_STATUS_LOADING,
  GET_ALARMS_STATUS_ERROR
} from './alarms.actionType'

const initialState = {
  alarms: {},
  loading: false,
  error: false
}

const reducers = (state=initialState, action) => {
  switch (action.type) {
    case GET_ALARMS_STATUS_SUCCESS:
      return {
        ...state,
        alarms: { ...action.payload },
        loading: false
      }
    case GET_ALARMS_STATUS_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_ALARMS_STATUS_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}

export default reducers