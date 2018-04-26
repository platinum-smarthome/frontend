import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  HOMEPIN_UPDATE,
  HOMEPIN_REMOVE,
  HOMEPIN_ACCESS_UNLOCK,
  HOMEPIN_ACCESS_LOCK,
  GET_HOMEPIN
} from '../store/housePin/housePin.actionType';
import reducer from '../store/housePin/housePin.reducers';

let mockAction = {
  type: '',
  payload: {}
}

let mockState = {
  loading: false,
  housePin: ['', '', '', '', '', ''],
  houseLock: true
}

let result

describe('housePin.reducers Test', () => {

  it('Test reducers with action.type GET_HOMEPIN', () => {
    mockAction.type = GET_HOMEPIN
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      loading: false
    })
    expect(result.loading).toEqual(false)
  })

  it('Test reducers with action.type HOMEPIN_UPDATE', () => {
    mockAction.type = HOMEPIN_UPDATE
    mockState.housePin = ['8','8', '8', '', '', '']
    expect(mockState.housePin).toEqual(['8','8', '8', '', '', ''])
    mockAction.payload = ['8','8', '8', '5', '', '']
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      housePin: [...mockAction.payload]
    })
    expect(result.housePin).toEqual(['8','8', '8', '5', '', ''])
  })

  it('Test reducers with action.type HOMEPIN_REMOVE', () => {
    mockAction.type = HOMEPIN_REMOVE
    result = reducer(mockState, mockAction) 
    mockState.housePin = ['8','8', '8', '8', '8', '8']
    expect(mockState.housePin).toEqual(['8','8', '8', '8', '8', '8'])
    expect(result).toEqual({
      ...mockState,
      housePin: ['','', '', '', '', '']
    })
    expect(result.housePin).toEqual(['','', '', '', '', ''])
  })

  it('Test reducers with action.type HOMEPIN_ACCESS_LOCK', () => {
    mockAction.type = HOMEPIN_ACCESS_LOCK
    result = reducer(mockState, mockAction) 
    expect(result).toEqual({
      ...mockState,
      houseLock: true
    })
    expect(result.houseLock).toEqual(true)
  })

  it('Test reducers with action.type HOMEPIN_ACCESS_UNLOCK', () => {
    mockAction.type = HOMEPIN_ACCESS_UNLOCK
    result = reducer(mockState, mockAction) 
    expect(result).toEqual({
      ...mockState,
      houseLock: false
    })
    expect(result.houseLock).toEqual(false)
  })
  


})