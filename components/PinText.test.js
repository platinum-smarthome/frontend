import React, { Component } from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import PinText from './PinText'
import { Text, View } from 'react-native'

enzyme.configure({ adapter: new Adapter()})

let wrapper

beforeEach(() => {
  wrapper = shallow(<PinText />)
})

describe('<PinText/>', () => {
  it('should render <PinText/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<PinText/> child is rendered', () => {
  it('Should render <View/>', () => {
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('View').length).toBe(1)  
  })
  it('Should render <Text/>', () => {
    expect(wrapper.find(<Text/>)).toBeDefined()
    expect(wrapper.find('Text').length).toBe(1)  
  })
})

describe('snapshot testing', () => {
  it('snapshot', () => {
    const tree = renderer.create(<PinText/>)
    expect(tree).toMatchSnapshot()
  })
})