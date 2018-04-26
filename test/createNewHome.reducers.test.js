import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  CREATE_NEW_HOME_HANDLE_INPUT_CHANGE,
  CREATE_NEW_HOME_LOADING,
  CREATE_NEW_HOME_SUCCESS,
  CREATE_NEW_HOME_ERROR,
  SET_CREATE_NEW_HOME_MESSAGE
} from '../store/createNewHome/createNewHome.actionType';
import reducer from '../store/createNewHome/createNewHome.reducers';

let mockAction = {
  type: '',
  payload: {}
}

let mockState = {
  homeName:'',
  homePin:'',
  createNewHomeLoading: false,
  createNewHomeError: false,
  message: '',
}

let result

describe('homeData.reducers Test', () => {

  it('Test reducers with action.type CREATE_NEW_HOME_HANDLE_INPUT_CHANGE with input homeName', () => {
    mockAction.type = CREATE_NEW_HOME_HANDLE_INPUT_CHANGE
    mockAction.payload = {
      name: 'homeName',
      value: 'Bambang House'
    }
    result = reducer(mockState, mockAction) 
    expect(result).toEqual({
      ...mockState,
      [mockAction.payload.name]: mockAction.payload.value
    })
    expect(result.homeName).toEqual('Bambang House')
  })

  it('Test reducers with action.type CREATE_NEW_HOME_HANDLE_INPUT_CHANGE with input homePin', () => {
    mockAction.type = CREATE_NEW_HOME_HANDLE_INPUT_CHANGE
    mockAction.payload = {
      name: 'homePin',
      value: '123456'
    }
    result = reducer(mockState, mockAction) 
    expect(result).toEqual({
      ...mockState,
      [mockAction.payload.name]: mockAction.payload.value
    })
    expect(result.homePin).toEqual(mockAction.payload.value)
  })

  it('Test reducers with action.type CREATE_NEW_HOME_LOADING', () => {
    mockAction.type = CREATE_NEW_HOME_LOADING
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      createNewHomeLoading: true
    })
    expect(result.createNewHomeLoading).toEqual(true)
  })

  it('Test reducers with action.type CREATE_NEW_HOME_SUCCESS', () => {
    mockAction.type = CREATE_NEW_HOME_SUCCESS
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState
    })
    expect(result).toEqual(mockState)
  })

  it('Test reducers with action.type CREATE_NEW_HOME_ERROR', () => {
    mockAction.type = CREATE_NEW_HOME_ERROR
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      createNewHomeLoading: false,
      createNewHomeError: true
    })
    expect(result.createNewHomeLoading).toEqual(false)
    expect(result.createNewHomeError).toEqual(true)
  })

  it('Test reducers with action.type SET_CREATE_NEW_HOME_MESSAGE', () => {
    mockAction.type = SET_CREATE_NEW_HOME_MESSAGE
    mockAction.payload = 'Test Message'
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      message: mockAction.payload
    })
    expect(result.message).toEqual(mockAction.payload)
  })

})