import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import sensorReducer from '../../store/sensors/sensor.reducers';

const middlewares = {};
const mockStore = configureStore(middlewares);
const getSensorStatusSuccess = () => ({ type: 'GET_SENSOR_STATUS_SUCCESS' });
const updateSensorStatusSuccess = () => ({ type: 'UPDATE_SENSOR_STATUS' });
const disableAllSensors = () => ({ type: 'DISABLE_ALL_SENSORS' });
const enableAllSensors = () => ({ type: 'ENABLE_ALL_SENSORS' });

describe('test actions sensor', () => {
  it('should dispatch action getSensorStatusSuccess', () => {
    const initialState = {}
    const store = mockStore(initialState)
    store.dispatch(getSensorStatusSuccess())
    const actions = store.getActions()
    const expectedPayload = { type: 'GET_SENSOR_STATUS_SUCCESS' }
    expect(actions).toEqual([expectedPayload])
  });

  it('should dispatch action updateSensorStatusSuccess', () => {
    const initialState = {}
    const store = mockStore(initialState)
    store.dispatch(updateSensorStatusSuccess())
    const actions = store.getActions()
    const expectedPayload = { type: 'UPDATE_SENSOR_STATUS' }
    expect(actions).toEqual([expectedPayload])
  });

  it('should dispatch action disableAllSensors', () => {
    const initialState = {}
    const store = mockStore(initialState)
    store.dispatch(disableAllSensors())
    const actions = store.getActions()
    const expectedPayload = { type: 'DISABLE_ALL_SENSORS' }
    expect(actions).toEqual([expectedPayload])
  });

  it('should dispatch action enableAllSensors', () => {
    const initialState = {}
    const store = mockStore(initialState)
    store.dispatch(enableAllSensors())
    const actions = store.getActions()
    const expectedPayload = { type: 'ENABLE_ALL_SENSORS' }
    expect(actions).toEqual([expectedPayload])
  });
});

describe('test reducer sensor', () => {
  it('reducers initialState', () => {
    let wrapper = sensorReducer(undefined, {})
    expect(wrapper).toEqual({ 
      sensors: {
        gas: 1,
        door: 1,
        garage: 1
      },
      loading: false
    })
  });
});