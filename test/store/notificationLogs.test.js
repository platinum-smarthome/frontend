import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import notificationLogsReducer from '../../store/notificationLogs/notificationLogs.reducers';

const middlewares = [];
const mockStore = configureStore(middlewares);
const fetchNotificationLogsSuccess = () => ({ type: 'FETCH_NOTIFICATION_LOGS' });
const updateLastNotified = () => ({ type: 'UPDATE_LAST_NOTIFIED' });

describe('test actions notification logs', () => {
  it('should dispatch action fetchNotificationLogsSuccess', () => {
    const initialState = {}
    const store = mockStore(initialState)
    store.dispatch(fetchNotificationLogsSuccess())
    const actions = store.getActions()
    const expectedPayload = { type: 'FETCH_NOTIFICATION_LOGS' }
    expect(actions).toEqual([expectedPayload])
  });

  it('should dispatch action updateLastNotified', () => {
    const initialState = {}
    const store = mockStore(initialState)
    store.dispatch(updateLastNotified())
    const actions = store.getActions()
    const expectedPayload = { type: 'UPDATE_LAST_NOTIFIED' }
    expect(actions).toEqual([expectedPayload])
  });
});

describe('test reducer notification logs', () => {
  it('reducers initialState', () => {
    let wrapper
    wrapper = notificationLogsReducer(undefined, {})
    expect(wrapper).toEqual({ 
      fectNotificationLogsLoading: false,
      logs: [],
      lastNotified: 0,
      fectNotificationLogsError: false,
    })
  });
});