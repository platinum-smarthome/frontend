import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  GET_ALARMS_STATUS_SUCCESS, 
  GET_ALARMS_STATUS_LOADING,
  GET_ALARMS_STATUS_ERROR
} from '../store/alarms/alarms.actionType';
import reducer from '../store/alarms/alarms.reducers';

let mockAction = {
  type: '',
  payload: {}
}

let mockAlarms = {
  door: 1,
  garage: 1,
  gas: 1,
}

let mockState = {
  alarms: mockAlarms,
  loading: false,
  error: false
}


let result

describe('alarms.reducers Test', () => {

  it('Test reducers should run dan return initalState', () => {
    mockAction.type = ''
    result = reducer(mockState, mockAction)
    expect(result).toEqual(mockState)
    expect(result.loading).toEqual(false)
    expect(result.error).toEqual(false)
    expect(result.alarms.door).toEqual(1)
    expect(result.alarms.garage).toEqual(1)
    expect(result.alarms.gas).toEqual(1)
  })

  it('Test GET_ALARMS_STATUS_SUCCESS', () => {
    mockAction.type = GET_ALARMS_STATUS_SUCCESS
    mockAction.payload = {
      door: 1,
      garage: 0,
      gas: 0,
    }
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      alarms: { ...mockAction.payload }
    })
    expect(result.loading).toEqual(false)
    expect(result.error).toEqual(false)
    expect(result.alarms.door).toEqual(1)
    expect(result.alarms.garage).toEqual(0)
    expect(result.alarms.gas).toEqual(0)
  })

  it('Test GET_ALARMS_STATUS_SUCCESS should return loading: true', () => {
    mockAction.type = GET_ALARMS_STATUS_LOADING
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      loading: true
    })
    expect(result.loading).toEqual(true)
  })

  it('Test GET_ALARMS_STATUS_LOADING should return error: true & loading: false', () => {
    mockAction.type = GET_ALARMS_STATUS_LOADING
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      loading: true,
    })
    expect(result.loading).toEqual(true)
  })

  it('Test GET_ALARMS_STATUS_ERROR should return error: true & loading: false', () => {
    mockAction.type = GET_ALARMS_STATUS_ERROR
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      loading: false,
      error: true
    })
    expect(result.loading).toEqual(false)
    expect(result.error).toEqual(true)
  })

})