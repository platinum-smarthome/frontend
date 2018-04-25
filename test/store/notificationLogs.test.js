import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import notificationLogsReducer from '../../store/notificationLogs/notificationLogs.reducers';


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