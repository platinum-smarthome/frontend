import React, { Component } from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import TouchAbleText from './TouchAbleText'
import { Text } from 'react-native'

enzyme.configure({ adapter: new Adapter()})

let wrapper

beforeEach(() => {
  wrapper = shallow(<TouchAbleText />)
})

describe('<TouchAbleText/>', () => {
  it('should render <TouchAbleText/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<TouchAbleText/> child is rendered', () => {
  it('Should render <Text/>', () => {
    expect(wrapper.find(<Text/>)).toBeDefined()
    expect(wrapper.find('Text').length).toBe(1)  
  })
})

describe('snapshot testing', () => {
  it('snapshot', () => {
    const tree = renderer.create(<TouchAbleText/>)
    expect(tree).toMatchSnapshot()
  })
})