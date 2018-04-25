import React, { Component } from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import TopCardTitle from './TopCardTitle'
import { Text, View, Image } from 'react-native'

enzyme.configure({ adapter: new Adapter()})

let wrapper

beforeEach(() => {
  wrapper = shallow(<TopCardTitle />)
})

describe('<TopCardTitle/>', () => {
  it('should render <TopCardTitle/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<TopCardTitle/> child is rendered', () => {
  it('Should render <View/>', () => {
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('View').length).toBe(3)  
  })
  it('Should render <Text/>', () => {
    expect(wrapper.find(<Text/>)).toBeDefined()
    expect(wrapper.find('Text').length).toBe(1)  
  })
  it('Should render <Image/>', () => {
    expect(wrapper.find(<Image/>)).toBeDefined()
    expect(wrapper.find('Image').length).toBe(1)  
  })
})

describe('snapshot testing', () => {
  it('snapshot', () => {
    const tree = renderer.create(<TopCardTitle/>)
    expect(tree).toMatchSnapshot()
  })
})