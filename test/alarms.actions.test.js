import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  GET_ALARMS_STATUS_SUCCESS, 
  GET_ALARMS_STATUS_LOADING,
  GET_ALARMS_STATUS_ERROR
} from '../store/alarms/alarms.actionType';
import {
  getAlarmsStatus
} from '../store/alarms/alarms.actions';

let result;
let mockResult;
let mockPayload = {}

describe('Action getAlarmsStatus Test', () => {

  it('getAlarmsStatus Success Test', () => {
    let expectedActions = [
      {type: "GET_ALARMS_STATUS_LOADING"},
      {type: "GET_ALARMS_STATUS_SUCCESS"},
    ];
    result = getAlarmsStatus();
    let index = 0
    
    result((action) => {
      expect(action).toEqual(expectedActions[index]);
      index++
    })
  })

})