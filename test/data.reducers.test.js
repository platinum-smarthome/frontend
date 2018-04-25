import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  DEVICE_PIN_INPUT_UPDATE,
  DEVICE_PIN_INPUT_REMOVE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from '../store/data/data.actionType';
import reducer from '../store/data/data.reducers';

let mockAction = {
  type: '',
  payload: {}
}

let mockState = {
  userLogin: false,
  devicePin: ['','', '', '', '', '']
}

let result

describe('data.reducers Test', () => {
  it('Test reducers with action.type DEVICE_PIN_INPUT_UPDATE', () => {
    mockAction.type = DEVICE_PIN_INPUT_UPDATE
    mockAction.payload = ['8','8','8','8','8','8']
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      devicePin: mockAction.payload
    })
  })

  it('Test reducers with action.type DEVICE_PIN_INPUT_REMOVE', () => {
    mockAction.type = DEVICE_PIN_INPUT_REMOVE
    result = reducer(mockState, mockAction)
    expect(result).toEqual(mockState)
  })

  it('Test reducers with action.type DEVICE_PIN_INPUT_REMOVE', () => {
    mockAction.type = DEVICE_PIN_INPUT_REMOVE
    result = reducer(mockState, mockAction)
    expect(result).toEqual(mockState)
  })

  it('Test reducers with action.type USER_LOGIN_SUCCESS', () => {
    mockAction.type = USER_LOGIN_SUCCESS
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      userLogin: true
    })
  })

  it('Test reducers with action.type USER_LOGOUT', () => {
    mockAction.type = USER_LOGOUT
    result = reducer(mockState, mockAction)
    expect(result).toEqual(mockState)
  })

  it('Test reducers with no action.type', () => {
    mockAction.type = ''
    result = reducer(mockState, mockAction)
    expect(result).toEqual(mockState)
  })
})