import React, { Component } from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'
import store from '../store/store'

import CardTitle from './CardTitle'
import { Text, View, Image } from 'react-native'

enzyme.configure({ adapter: new Adapter()})

let wrapper

beforeEach(() => {
  wrapper = shallow(<CardTitle/>)
})

describe('<CardTitle/>', () => {
  it('should render <CardTitle/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<CardTitle/> child is rendered', () => {
  it('should render <Text/>' , () => {
    expect(wrapper.find(<Text/>)).toBeDefined()
    expect(wrapper.find('Text').length).toBe(1)
  })
  it('Should render <View/>', () => {
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('View').length).toBe(3)  
  })
  it('Should render <Image/>', () => {
    expect(wrapper.find(<Image/>)).toBeDefined()
    expect(wrapper.find('Image').length).toBe(1)  
  })
})

describe('snapshot testing', () => {
  it('snapshot', () => {
    const tree = renderer.create(<CardTitle/>)
    expect(tree).toMatchSnapshot()
  })
})