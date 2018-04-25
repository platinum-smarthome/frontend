import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  HOMEPIN_UPDATE,
  HOMEPIN_REMOVE,
  HOMEPIN_ACCESS_UNLOCK,
  HOMEPIN_ACCESS_LOCK,
  GET_HOMEPIN
} from '../store/housePin/housePin.actionType';
import {
  loadHomePin,
  homeUnlock,
  homePinUpdate,
  homePinAccessSuccess,
  homeLock
} from '../store/housePin/housePin.actions';
import Base64 from '../helpers/hash.helper'


let result;
let mockResult;
let mockPayload = {}

describe('Action homePinUpdate Test', () => {

  it('homePinUpdate Test if input is correct', () => {
    mockPayload = {
      homePin: 'ODg4ODg4',
      input: ['8','8','8','8','8','8']
    }
    const expectedActions = [
      {
        type: 'HOMEPIN_UPDATE',
        housePin: ['8','8','8','8','8','8']
      },
      {type: "HOMEPIN_REMOVE"},
      {type: "HOMEPIN_ACCESS_UNLOCK"},
    ];
    result = homePinUpdate(mockPayload);
    let index = 0
    result((action) => {
      if(typeof(action) === 'object') {
        expect(action).toEqual(expectedActions[index]);
      }
      index++
    })
  })

  it('homePinUpdate Test if input is incorrect', () => {
    mockPayload = {
      homePin: 'ODg4ODg4',
      input: ['8','8','8','8','2','2']
    }
    const expectedActions = [
      {
        type: 'HOMEPIN_UPDATE',
        housePin: ['8','8','8','8','2','2']
      },
      {type: "HOMEPIN_REMOVE"}
    ];
    result = homePinUpdate(mockPayload);
    let index = 0
    result((action) => {
      expect(action).toEqual(expectedActions[index]);
      index++
    })
  })

})

describe('Action loadHomePin Test', () => {

  it('loadHomePin Test', () => {
    let expectedActions = [
      {type: "GET_HOMEPIN"},
    ];
    result = loadHomePin();
    let index = 0
    result((action) => {
      expect(action).toEqual(expectedActions[index]);
      index++
    })
  })

})

describe('Action homeUnlock Test', () => {

  it('homeUnlock Test', () => {
    let expectedActions = [
      {type: "HOMEPIN_ACCESS_UNLOCK"},
    ];
    result = homeUnlock();
    let index = 0
    result((action) => {
      expect(action).toEqual(expectedActions[index]);
      index++
    })
  })

})

describe('Action homeLock Test', () => {

  it('homeLock Test', () => {
    let expectedActions = [
      {type: 'HOMEPIN_ACCESS_LOCK'},
      {type: 'HOMEPIN_ACCESS_LOCK'}
    ];
    result = homeLock();
    let index = 0
    result((action) => {
      if(typeof(action) === 'object') {
        expect(action).toEqual(expectedActions[index]);
      }
      else if (typeof(action) === 'function') {
        action((act) => {
          expect(act).toEqual(expectedActions[index])
        })
      }
      index++
    })
  })

})

describe('Action homePinAccessSuccess Test', () => {

  it('homePinAccessSuccess Test', () => {
    result = homePinAccessSuccess();
    expect(result.type).toEqual('HOMEPIN_ACCESS_UNLOCK');
  })

})