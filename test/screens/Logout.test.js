import { View, StyleSheet, Image, Text, StatusBar } from 'react-native';
import React from 'react';
import expect from 'expect';
import renderer from 'react-test-renderer';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";

import store from '../../store/store';

import Logout from '../../screens/Logout';


Enzyme.configure({ adapter: new Adapter() });

describe('logout component testing', () => {
  it('should render without throwing an error', () => {
    // const tree = renderer.create(
    //   <Logout />
    // ).toJSON();
    // expect(tree).toMatchSnapshot();

    expect(
      shallow(
        <Provider store={store}>
            <Logout />
        </Provider>
      ).exists(
        <View>
          <StatusBar />
          <Image />
        </View>
      )
    ).toBe(true);
  });
});