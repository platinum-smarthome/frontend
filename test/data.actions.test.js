import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  DEVICE_PIN_INPUT_UPDATE,
  DEVICE_PIN_INPUT_REMOVE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from '../store/data/data.actionType';
import {
  devicePinUpdate,
  userLogout
} from '../store/data/data.actions';
import Base64 from '../helpers/hash.helper'


let result;
let mockResult;
let mockPayload = {}

describe('data.actions Test', () => {
  it('userLogout function should return USER_LOGOUT', () => {
    result = userLogout();
    mockResult = { type: 'USER_LOGOUT'}
    expect(result).toEqual(mockResult)
  })
})

describe('Function devicePinUpdate Test', () => {
  const expectedActions = [
    {
      type: 'DEVICE_PIN_INPUT_UPDATE',
      payload: ['8','8','8','8','8','8']
    },
    {type: "DEVICE_PIN_INPUT_REMOVE"},
    {type: "USER_LOGIN_SUCCESS"}
  ];


  it('devicePinUpdate should run devicePinUpdateSuccess When input least than 6 digits', () => {
    mockPayload = {
      userPin: 'ODg4ODg4',
      input: ['8','8','8','','','']
    }
    result = devicePinUpdate(mockPayload);
    result((action) => {
      expect(action).toEqual({
        type: 'DEVICE_PIN_INPUT_UPDATE',
        payload: ['8','8','8','','','']
      });
    })
  })

  it('devicePinUpdate should run devicePinRemove When input is 6 digits', () => {
    mockPayload = {
      userPin: 'ODg4ODg4',
      input: ['8','8','8','5','5','5']
    }
    const expectedActions = [
      {
        type: 'DEVICE_PIN_INPUT_UPDATE',
        payload: ['8','8','8','5','5','5']
      },
      {type: "DEVICE_PIN_INPUT_REMOVE"}
    ];
    result = devicePinUpdate(mockPayload);
    let index = 0
    result((action) => {
      expect(action).toEqual(expectedActions[index]);
      index++
    })
  })
  
  it('devicePinUpdate should run userLoginSuccess When input is same with userPin', () => {
    mockPayload = {
      userPin: 'ODg4ODg4',
      input: ['8','8','8','8','8','8']
    }
    const expectedActions = [
      {
        type: 'DEVICE_PIN_INPUT_UPDATE',
        payload: ['8','8','8','8','8','8']
      },
      {type: "DEVICE_PIN_INPUT_REMOVE"},
      {type: "USER_LOGIN_SUCCESS"}
    ];
    result = devicePinUpdate(mockPayload);
    let index = 0
    result((action) => {
      expect(action).toEqual(expectedActions[index]);
      index++
    })
  })
})