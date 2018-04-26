import React, { Component } from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'
import store from '../store/store'

import Bullet from './Bullet'
import { Text, View, Image } from 'react-native'

enzyme.configure({ adapter: new Adapter()})

let wrapper
let pin

beforeEach(() => {
  pin = ['1', '', '', '', '', '']
  wrapper = shallow(<Bullet pin={pin}/>)
})

describe('<Bullet/>', () => {
  it('should render <Bullet/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<Bullet/> child is rendered', () => {
  it('should render <View/>' , () => {
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('View').length).toBe(1)
  })
  it('Should render <Text/>', () => {
    expect(wrapper.find(<Text/>)).toBeDefined()
    expect(wrapper.find('Text').length).toBe(5)  
  })
})
