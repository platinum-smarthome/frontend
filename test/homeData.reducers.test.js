import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  FETCH_HOME_DATA_LOADING,
  FETCH_HOME_DATA,
  FETCH_HOME_DATA_ID,
  FETCH_HOME_DATA_NAME,
  FETCH_HOME_DATA_PIN, 
  FETCH_HOME_DATA_ERROR
} from '../store/homeData/homeData.actionType';
import reducer from '../store/homeData/homeData.reducers';

let mockAction = {
  type: '',
  payload: {}
}

let mockState = {
  fectHomeDataLoading: true,
  homeId: '',
  homeName: '',
  homePin: ['','','','','',''],
  fectHomeDataError: false,
}

let result

describe('homeData.reducers Test', () => {

  it('Test reducers with action.type FETCH_HOME_DATA', () => {
    mockAction.type = FETCH_HOME_DATA
    result = reducer(mockState, mockAction) 
    expect(result).toEqual({
      ...mockState,
      fectHomeDataLoading: false
    })
    expect(result.fectHomeDataLoading).toEqual(false)
  })

  it('Test reducers with action.type FETCH_HOME_DATA_ID', () => {
    mockAction.type = FETCH_HOME_DATA_ID
    mockAction.payload = '123456'
    result = reducer(mockState, mockAction) 
    expect(result).toEqual({
      ...mockState,
      homeId: mockAction.payload
    })
    expect(result.homeId).toEqual(mockAction.payload)
  })

  it('Test reducers with action.type FETCH_HOME_DATA_NAME', () => {
    mockAction.type = FETCH_HOME_DATA_NAME
    mockAction.payload = 'Bambang House'
    result = reducer(mockState, mockAction) 
    expect(result).toEqual({
      ...mockState,
      homeName: mockAction.payload
    })
    expect(result.homeName).toEqual(mockAction.payload)
  })

  it('Test reducers with action.type FETCH_HOME_DATA_PIN', () => {
    mockAction.type = FETCH_HOME_DATA_PIN
    mockAction.payload = '123456'
    result = reducer(mockState, mockAction) 
    expect(result).toEqual({
      ...mockState,
      homePin: mockAction.payload
    })
    expect(result.homePin).toEqual(mockAction.payload)
  })

  it('Test reducers with action.type FETCH_HOME_DATA_LOADING', () => {
    mockAction.type = FETCH_HOME_DATA_LOADING
    result = reducer(mockState, mockAction) 
    expect(result).toEqual({
      ...mockState,
      fectHomeDataLoading: true
    })
    expect(result.fectHomeDataLoading).toEqual(true)
  })

  it('Test reducers with action.type FETCH_HOME_DATA_ERROR', () => {
    mockAction.type = FETCH_HOME_DATA_ERROR
    result = reducer(mockState, mockAction) 
    expect(result).toEqual({
      ...mockState,
      fectHomeDataLoading: false,
      fectHomeDataError: true
    })
    expect(result.fectHomeDataError).toEqual(true)
    expect(result.fectHomeDataLoading).toEqual(false)
  })

})