import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  CREATE_NEW_USER_HANDLE_INPUT_CHANGE,
  CREATE_NEW_USER_LOADING,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_ERROR,
  CHECK_INPUT
} from '../store/addNewUser/addNewUser.actionType';
import reducer from '../store/addNewUser/addNewUser.reducers';

let mockAction = {
  type: '',
  payload: {}
}

let mockState = {
  username: '',
  email: '',
  pin: '',
  deviceId: '',
  message: '',
  addNewUserLoading: false,
  addNewUserError: false,
}

let result

describe('addNewUser.reducers Test', () => {

  it('Test CREATE_NEW_USER_HANDLE_INPUT_CHANGE input username', () => {
    mockAction.type = CREATE_NEW_USER_HANDLE_INPUT_CHANGE
    mockAction.payload = {
      name: 'username',
      value: 'Bambang'
    }
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      username: 'Bambang',
      message: ``
    })
    expect(result.username).toEqual('Bambang')    
  })

  it('Test CREATE_NEW_USER_HANDLE_INPUT_CHANGE input email', () => {
    mockAction.type = CREATE_NEW_USER_HANDLE_INPUT_CHANGE
    mockAction.payload = {
      name: 'email',
      value: 'bambang@gmail.com'
    }
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      email: 'bambang@gmail.com',
      message: ``
    })
    expect(result.email).toEqual('bambang@gmail.com')    
  })

  it('Test CREATE_NEW_USER_HANDLE_INPUT_CHANGE input pin', () => {
    mockAction.type = CREATE_NEW_USER_HANDLE_INPUT_CHANGE
    mockAction.payload = {
      name: 'pin',
      value: '123456'
    }
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      pin: '123456',
      message: ``
    })
    expect(result.pin).toEqual('123456')    
  })

  it('Test CREATE_NEW_USER_HANDLE_INPUT_CHANGE input pin', () => {
    mockAction.type = CREATE_NEW_USER_HANDLE_INPUT_CHANGE
    mockAction.payload = {
      name: 'deviceId',
      value: '863254036787322'
    }
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      deviceId: '863254036787322',
      message: ``
    })
    expect(result.deviceId).toEqual('863254036787322')    
  })


  it('Test CHECK_INPUT should set message', () => {
    mockAction.type = CHECK_INPUT
    mockAction.payload = 'Test message'
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      message: `Test message`
    })
    expect(result.message).toEqual('Test message')    
  })

  it('Test CREATE_NEW_USER_ERROR should set addNewUserLoading to false and addNewUserError true', () => {
    mockAction.type = CREATE_NEW_USER_ERROR
    mockAction.payload = { }
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      addNewUserLoading: false,
      addNewUserError: true
    })
    expect(result.addNewUserLoading).toEqual(false)
    expect(result.addNewUserError).toEqual(true)
  })

  it('Test CREATE_NEW_USER_SUCCESS should set State to initalState', () => {
    mockAction.type = CREATE_NEW_USER_SUCCESS
    mockAction.payload = { }
    result = reducer(mockState, mockAction)
    expect(result).toEqual(mockState)
  })

  it('Test CREATE_NEW_USER_LOADING should set addNewUserLoading to true', () => {
    mockAction.type = CREATE_NEW_USER_LOADING
    mockAction.payload = { }
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      addNewUserLoading: true,
    })
    expect(result.addNewUserLoading).toEqual(true)
  })

})