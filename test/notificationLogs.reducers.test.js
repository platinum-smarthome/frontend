import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  FETCH_NOTIFICATION_LOGS_LOADING,
  FETCH_NOTIFICATION_LOGS,
  FETCH_NOTIFICATION_LOGS_ERROR,
  UPDATE_LAST_NOTIFIED
} from '../store/notificationLogs/notificationLogs.actionType';
import reducer from '../store/notificationLogs/notificationLogs.reducers';

let mockAction = {
  type: '',
  payload: {}
}

let mockState = {
  fectNotificationLogsLoading: false,
  logs: [],
  lastNotified: 0,
  fectNotificationLogsError: false,
}

let mockLog = {
  id: 1,
  title: 'Test Log',
  description: 'Test Log 2',
  createdAt: 1524577306821,
  imageUrl: 'http://res.cloudinary.com/eksa/image/upload/v1524577306/kmhbkdwz9ha6xmqpfs9o.jpg'
}

let result

describe('sensor.reducers Test', () => {

  it('Test reducers with action.type FETCH_NOTIFICATION_LOGS', () => {
    mockAction.type = FETCH_NOTIFICATION_LOGS
    mockAction.payload = [mockLog, mockLog, mockLog]
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      logs: [ ...mockAction.payload ],
      fectNotificationLogsLoading: false
    })
    expect(result.logs.length).toEqual(3)
    expect(result.logs[0]).toEqual(mockLog)
    expect(result.logs[1]).toEqual(mockLog)
    expect(result.logs[2]).toEqual(mockLog)
    expect(result.fectNotificationLogsLoading).toEqual(false)
  })

  it('Test reducers with action.type FETCH_NOTIFICATION_LOGS_LOADING', () => {
    mockAction.type = FETCH_NOTIFICATION_LOGS_LOADING
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      fectNotificationLogsLoading: true
    })
    expect(result.fectNotificationLogsLoading).toEqual(true)
  })

  it('Test reducers with action.type FETCH_NOTIFICATION_LOGS_ERROR', () => {
    mockAction.type = FETCH_NOTIFICATION_LOGS_ERROR
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      fectNotificationLogsLoading: false,
      fectNotificationLogsError: true
    })
    expect(result.fectNotificationLogsError).toEqual(true)
    expect(result.fectNotificationLogsLoading).toEqual(false)
  })

  it('Test reducers with action.type UPDATE_LAST_NOTIFIED', () => {
    mockAction.type = UPDATE_LAST_NOTIFIED
    mockAction.payload = 1524577306821
    result = reducer(mockState, mockAction)
    expect(result).toEqual({
      ...mockState,
      lastNotified: mockAction.payload
    })
    expect(result.lastNotified).toEqual(mockAction.payload)
  })

  it('Test reducers initialState', () => {
    mockAction.type = ''
    result = reducer(mockState, mockAction)
    expect(result).toEqual(mockState)
  })
  
})