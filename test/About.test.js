import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import About from '../screens/About';



describe('about component testing', () => {
  it('should render without throwing an error', () => {
    // const tree = renderer.create(
    //   <About />
    // ).toJSON();
    // expect(tree).toMatchSnapshot();

    const wrapper = shallow(<About />)
    expect(wrapper.exists)
  });
});