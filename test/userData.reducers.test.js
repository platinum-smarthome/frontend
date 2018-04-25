import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  FETCH_USER_DATA_LOADING,
  FETCH_USER_DATA,
  FETCH_USER_DATA_ERROR
} from '../store/userData/userData.actionType';
import reducer from '../store/userData/userData.reducers';

let mockAction = {
  type: '',
  payload: {}
}

let mockState = {
  fectUserDataLoading: true,
  username: '',
  deviceId: '',
  pin: '',
  email: '',
  lastSeen: '',
  fectUserDataError: false,
}

let result

describe('userData.reducers Test', () => {

  it('Test reducers with action.type FETCH_USER_DATA_LOADING', () => {
    mockAction.type = FETCH_USER_DATA_LOADING
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      fectUserDataLoading: true
    })
    expect(result.fectUserDataLoading).toEqual(true)
  })

  it('Test reducers with action.type FETCH_USER_DATA', () => {
    mockAction.type = FETCH_USER_DATA
    mockAction.payload = {
      username: 'Bambang',
      deviceId: '123456789',
      pin: '123456',
      email: 'bambang@gmail.com',
      lastSeen: '15-4-2018'
    }
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      ...mockAction.payload,
      fectUserDataLoading: false
    })
    expect(result.username).toEqual(mockAction.payload.username)
    expect(result.deviceId).toEqual(mockAction.payload.deviceId)
    expect(result.pin).toEqual(mockAction.payload.pin)
    expect(result.email).toEqual(mockAction.payload.email)
    expect(result.lastSeen).toEqual(mockAction.payload.lastSeen)
    expect(result.fectUserDataLoading).toEqual(false)    
  })

  it('Test reducers with action.type FETCH_USER_DATA_ERROR', () => {
    mockAction.type = FETCH_USER_DATA_ERROR
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      fectUserDataLoading: false,
      fectUserDataError: true
    })
    expect(result.fectUserDataLoading).toEqual(false)
    expect(result.fectUserDataError).toEqual(true)
  })

})