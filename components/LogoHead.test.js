import React, { Component } from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import LogoHead from './LogoHead'
import { View, Image } from 'react-native'

enzyme.configure({ adapter: new Adapter()})

let wrapper

beforeEach(() => {
  wrapper = shallow(<LogoHead status={true}/>)
})

describe('<LogoHead/>', () => {
  it('should render <LogoHead/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<LogoHead/> child is rendered', () => {
  it('Should render <View/>', () => {
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('View').length).toBe(1)  
  })
  it('Should render <Image/>', () => {
    expect(wrapper.find(<Image/>)).toBeDefined()
    expect(wrapper.find('Image').length).toBe(1)  
  })
})

describe('<Image/> renders the correct image', () => {
  it('should render the proper image if status is true', () => {
    expect(wrapper.find(<Image source={require('../components/assets/fortress_logo.png')}/>)).toBeDefined()
  })
})

describe('snapshot testing', () => {
  it('snapshot', () => {
    const tree = renderer.create(<LogoHead/>)
    expect(tree).toMatchSnapshot()
  })
})