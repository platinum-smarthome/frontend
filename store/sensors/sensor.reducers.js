import { GET_SENSOR_STATUS_SUCCESS, UPDATE_SENSOR_STATUS, GET_SENSOR_STATUS_LOADING } from './sensor.actionType'

const initialState = {
  sensors: [],
  loading: false
}

const reducers = (state=initialState, action) => {
  switch (action.type) {
    case GET_SENSOR_STATUS_SUCCESS:
      return {
        ...state,
        sensors: action.sensors,
        loading: false
      }
    case GET_SENSOR_STATUS_LOADING:
      return {
        ...state,
        loading: true
      }
    case UPDATE_SENSOR_STATUS:
      return {
        ...state
      }
    default:
      return state
  }
}

export default reducers