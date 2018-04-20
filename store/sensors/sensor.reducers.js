import { 
  GET_SENSOR_STATUS_SUCCESS, 
  GET_SENSOR_STATUS_LOADING, 
  UPDATE_SENSOR_STATUS,
  DISABLE_ALL_SENSORS,
  ENABLE_ALL_SENSORS
} from './sensor.actionType'
import { enableSensors } from './sensor.actions';

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
    case DISABLE_ALL_SENSORS:
      return {
        ...state
      }
    case ENABLE_ALL_SENSORS:
      return {
        ...state
      }
    default:
      return state
  }
}

export default reducers