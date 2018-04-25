import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  CREATE_NEW_USER_HANDLE_INPUT_CHANGE,
  CREATE_NEW_USER_LOADING,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_ERROR,
  CHECK_INPUT
} from '../store/addNewUser/addNewUser.actionType';
import {
  createNewUserHandleInputChange,
  createNewUser,
  sendMessage
} from '../store/addNewUser/addNewUser.actions';
import reducer from '../store/addNewUser/addNewUser.reducers';

let result;
let mockResult;
let mockPayload = {}

describe('Action createNewUserHandleInputChange Test', () => {
  
  it('createNewUserHandleInputChange should return type: CREATE_NEW_USER_HANDLE_INPUT_CHANGE', () => {
    mockPayload = {
      name: 'username',
      value: 'Bambang'
    }
    result = createNewUserHandleInputChange(mockPayload);
    expect(result.type).toEqual('CREATE_NEW_USER_HANDLE_INPUT_CHANGE')
    expect(result.payload.name).toEqual('username')
    expect(result.payload.value).toEqual('Bambang')
  })

})

describe('Action createNewUser ', () => {
  it('createNewUser Test', () => {
    let expectedActions = [
      {type: "CREATE_NEW_USER_LOADING"},
      {type: "CREATE_NEW_USER_SUCCESS"},
    ];
    mockPayload = 'Testing Message'
    result = createNewUser({
      user: {
        email: 'testing@gmail.com',
        username: 'TESTING',
        pin: '123456',
        deviceId: '12345678987654321'
      }
    });
    let index = 0
    result((action) => {
      expect(action).toEqual(expectedActions[index]);
      index++
    })
  })

})

describe('Action sendMessage Test', () => {

  it('sendMessage should return type: CHECK_INPUT', () => {
    mockPayload = 'Testing Message'
    result = sendMessage(mockPayload);
    expect(result.type).toEqual('CHECK_INPUT')
    expect(result.payload).toEqual('Testing Message')
  })

})