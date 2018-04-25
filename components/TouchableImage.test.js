import React, { Component } from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import TouchAble from './TouchAbleImage'
import { TouchableHighlight, Image } from 'react-native'

enzyme.configure({ adapter: new Adapter()})

let wrapper

beforeEach(() => {
  wrapper = shallow(<TouchAble />)
})

describe('<TouchAble/>', () => {
  it('should render <TouchAble/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<TouchAble/> child is rendered', () => {
  it('Should render <View/>', () => {
    expect(wrapper.find(<TouchableHighlight/>)).toBeDefined()
    expect(wrapper.find('TouchableHighlight').length).toBe(1)  
  })
  it('Should render <Image/>', () => {
    expect(wrapper.find(<Image/>)).toBeDefined()
    expect(wrapper.find('Image').length).toBe(1)  
  })
})

describe('<Image/> renders the correct image', () => {
  it('should render the proper image if status is true', () => {
    expect(wrapper.find(<Image source={require('./assets/info-2-16.png')}/>)).toBeDefined()
  })
})

describe('snapshot testing', () => {
  it('snapshot', () => {
    const tree = renderer.create(<TouchAble/>)
    expect(tree).toMatchSnapshot()
  })
})