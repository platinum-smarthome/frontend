import { Text, View, Image, ScrollView, StyleSheet, Alert, TouchableOpacity, AppState, StatusBar } from 'react-native'
import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import { Provider } from "react-redux";
import Adapter from 'enzyme-adapter-react-16';

import store from '../store/store';
import Dashboard from '../screens/Dashboard';
import NewMonitor from '../components/NewMonitor';

Enzyme.configure({ adapter: new Adapter() });

describe('dashboard component testing', () => {
  it("should render without throwing an error", () => {
    expect(
        shallow(
            <Provider store={store}>
                <Dashboard />
            </Provider>
        ).exists(
          <View>
            <NewMonitor text={'Door'} />
            <NewMonitor text={'Gas'} />
            <NewMonitor text={'Garage'} />
          </View>
        )
    ).toBe(true);
  });
});