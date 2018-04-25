import React, { Component } from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'
import store from '../store/store'

import InputErrorText from './InputErrorText'
import { Text, View, Image } from 'react-native'

enzyme.configure({ adapter: new Adapter()})

let wrapper

beforeEach(() => {
  wrapper = shallow(<InputErrorText/>)
})

describe('<InputErrorText/>', () => {
  it('should render <InputErrorText/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<Drawer/> child is rendered', () => {
  it('Should render <View/>', () => {
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('View').length).toBe(1)  
  })
  it('Should render <Text/>', () => {
    expect(wrapper.find(<Text/>)).toBeDefined()
    expect(wrapper.find('Text').length).toBe(1)  
  })
})
