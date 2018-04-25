import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  FETCH_USER_DATA,
  FETCH_USER_DATA_LOADING,
  FETCH_USER_DATA_ERROR
} from '../store/userData/userData.actionType';
import {
  searchUser
} from '../store/userData/userData.actions';

let result;
let mockResult;
let mockPayload = {}

let mockUsers = {
  123456: {
    email: '123456@email.com',
    username: '123456',
    pin: '123456',
    deviceId: '123456'
  },
  654321: {
    email: '654321@email.com',
    username: '654321',
    pin: '654321',
    deviceId: '654321'
  },
  testerDeveloper123Testing: {
    email: 'testerDeveloper123Testing@email.com',
    username: 'testerDeveloper123Testing',
    pin: '654321',
    deviceId: 'testerDeveloper123Testing'
  }
}

describe('Action searchUser Test', () => {

  it('searchUser Success Test', () => {
    let expectedActions = [
      {type: "FETCH_USER_DATA_LOADING"},
      {type: "FETCH_USER_DATA"},
    ];
    result = searchUser(mockUsers);
    let index = 0
    result((action) => {
      expect(action).toEqual(expectedActions[index]);
      index++
    })
  })

})