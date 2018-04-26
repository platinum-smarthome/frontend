import React, { Component } from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'
import store from '../store/store'

import Drawer from './Drawer'
import { Text, View, Image } from 'react-native'

enzyme.configure({ adapter: new Adapter()})

let wrapper

beforeEach(() => {
  wrapper = shallow(<Drawer/>)
})

describe('<Drawer/>', () => {
  it('should render <Drawer/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<Drawer/> child is rendered', () => {
  it('Should render <View/>', () => {
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('View').length).toBe(1)  
  })
  it('Should render <Image/>', () => {
    expect(wrapper.find(<Image/>)).toBeDefined()
    expect(wrapper.find('Image').length).toBe(1)  
  })
})

describe('<Image/> should render image', () => {
  it('should render the correct image', () => {
    expect(wrapper.find(<Image source={require('../components/assets/menu.png')}/>)).toBeDefined()
  }) 
})
