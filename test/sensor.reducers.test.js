import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  GET_SENSOR_STATUS_SUCCESS, 
  GET_SENSOR_STATUS_LOADING, 
  UPDATE_SENSOR_STATUS,
  DISABLE_ALL_SENSORS,
  ENABLE_ALL_SENSORS
} from '../store/sensors/sensor.actionType';
import reducer from '../store/sensors/sensor.reducers';

let mockAction = {
  type: '',
  payload: {}
}

let mockState = {
  sensors: {
    gas: 1,
    door: 1,
    garage: 1
  },
  loading: false
}

let result

describe('sensor.reducers Test', () => {

  it('Test reducers with action.type GET_SENSOR_STATUS_LOADING', () => {
    mockAction.type = GET_SENSOR_STATUS_LOADING
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      loading: true
    })
    expect(result.loading).toEqual(true)
  })

  it('Test reducers with action.type UPDATE_SENSOR_STATUS', () => {
    mockAction.type = UPDATE_SENSOR_STATUS
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState
    })
    expect(result).toEqual(mockState)
  })

  it('Test reducers with action.type DISABLE_ALL_SENSORS', () => {
    mockAction.type = DISABLE_ALL_SENSORS
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState
    })
    expect(result).toEqual(mockState)
  })

  it('Test reducers with action.type ENABLE_ALL_SENSORS', () => {
    mockAction.type = ENABLE_ALL_SENSORS
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState
    })
    expect(result).toEqual(mockState)
  })

  it('Test reducers with action.type GET_SENSOR_STATUS_SUCCESS', () => {
    mockAction.type = GET_SENSOR_STATUS_SUCCESS
    mockAction.payload = {
      gas: 1,
      door: 1,
      garage: 1,
    }
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      sensors: mockAction.payload,
      loading: false
      
    })
    expect(result.sensors.gas).toEqual(1)
    expect(result.sensors.door).toEqual(1)
    expect(result.sensors.garage).toEqual(1)
  })
  
})