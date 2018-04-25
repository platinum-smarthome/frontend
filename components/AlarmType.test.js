import React, { Component } from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import AlarmType from './AlarmType'

import { Text, View, Image, TouchableOpacity } from 'react-native'

enzyme.configure({ adapter: new Adapter()})

let wrapper

beforeEach(() => {
  wrapper = shallow(<AlarmType status={true}/>)
})

describe('<AlarmType/>', () => {
  it('should render <AlarmType/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<AlarmType/> child is rendered', () => {
  it('should render <TouchableOpacity/>' , () => {
    expect(wrapper.find(<TouchableOpacity/>)).toBeDefined()
    expect(wrapper.find('TouchableOpacity').length).toBe(1)
  })
  it('Should render <View/>', () => {
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('View').length).toBe(3)  
  })
  it('Should render <Image/>', () => {
    expect(wrapper.find(<Image/>)).toBeDefined()
    expect(wrapper.find('Image').length).toBe(2)  
  })
})

describe('<Image/> renders the correct image', () => {
  it('should render the proper image if status is true', () => {
    let wraptrue = shallow(<AlarmType status={true}/>)
    expect(wraptrue.find(<Image source={require('../components/assets/puerta.png')}/>)).toBeDefined()
    expect(wraptrue.find(<Image source={require('../components/assets/greyarrow.png')}/>)).toBeDefined()
  })
  it('should render the proper image if status is true', () => {
    let wrapfalse = shallow(<AlarmType status={false}/>)
    expect(wrapfalse.find(<Image source={ require('../components/assets/access.png')} />)).toBeDefined()
    expect(wrapfalse.find(<Image source={ require('../components/assets/desbloqueado.png')} />)).toBeDefined()
  })
})

describe('snapshot testing', () => {
  it('snapshot', () => {
    const tree = renderer.create(<AlarmType/>)
    expect(tree).toMatchSnapshot()
  })
})