import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import sensorReducer from '../../store/sensors/sensor.reducers';


describe('test reducer notification logs', () => {
  it('reducers initialState', () => {
    let wrapper
    wrapper = sensorReducer(undefined, {})
    expect(wrapper).toEqual({ 
      sensors: [],
      loading: false
    })
  });
});