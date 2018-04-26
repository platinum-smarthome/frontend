import React, { Component } from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import NotificationCardFooter from './NotificationCard.footer'
import { View, Text, TouchableHighlight } from 'react-native'

enzyme.configure({ adapter: new Adapter()})

let wrapper

beforeEach(() => {
  wrapper = shallow(<NotificationCardFooter />)
})

describe('<NotificationCardFooter/>', () => {
  it('should render <NotificationCardFooter/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<NotificationCardFooter/> child is rendered', () => {
  it('Should render <View/>', () => {
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('View').length).toBe(1)  
  })
  it('Should render <TouchableHighlight/>', () => {
    expect(wrapper.find(<TouchableHighlight/>)).toBeDefined()
    expect(wrapper.find('TouchableHighlight').length).toBe(1)  
  })
  it('Should render <Text/>', () => {
    expect(wrapper.find(<Text/>)).toBeDefined()
    expect(wrapper.find('Text').length).toBe(1)  
  })
})

describe('snapshot testing', () => {
  it('snapshot', () => {
    const tree = renderer.create(<NotificationCardFooter/>)
    expect(tree).toMatchSnapshot()
  })
})