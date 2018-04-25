import React, { Component } from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import Member from './Member'
import { Text, View, Image } from 'react-native'

enzyme.configure({ adapter: new Adapter()})

let wrapper
let data

beforeEach(() => {
  data = {
    username: 'herby',
    deviceId: '123',
    email: 'foo@bar.com'
  }
  wrapper = shallow(<Member data={data}/>)
})

describe('<Member/>', () => {
  it('should render <Member/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<Member/> child is rendered', () => {
  it('should render <Text/>' , () => {
    expect(wrapper.find(<Text/>)).toBeDefined()
    expect(wrapper.find('Text').length).toBe(3)
  })
  it('Should render <View/>', () => {
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('View').length).toBe(4)  
  })
  it('Should render <Image/>', () => {
    expect(wrapper.find(<Image/>)).toBeDefined()
    expect(wrapper.find('Image').length).toBe(1)  
  })
})

describe('<Image/> renders the correct image', () => {
  it('should render the proper image', () => {
    expect(wrapper.find(<Image source={require('./assets/hombre.png')}/>)).toBeDefined()
  })
})
