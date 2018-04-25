import React, { Component } from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'
import store from '../store/store'

import NewMonitor from './NewMonitor'
import { Text, View, Image } from 'react-native'

enzyme.configure({ adapter: new Adapter()})

let wrapper

beforeEach(() => {
  wrapper = shallow(<NewMonitor/>)
})

describe('<NewMonitor/>', () => {
  it('should render <NewMonitor/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<NewMonitor/> child is rendered', () => {
  it('Should render <View/>', () => {
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('View').length).toBe(4)  
  })
  it('Should render <Text/>', () => {
    expect(wrapper.find(<Text/>)).toBeDefined()
    expect(wrapper.find('Text').length).toBe(2)  
  })
  it('Should render <Image/>', () => {
    expect(wrapper.find(<Image/>)).toBeDefined()
    expect(wrapper.find('Image').length).toBe(1)  
  })
})

describe('<Image/> renders the correct image' , () => {
  it('should render the proper image if status is true', () => {
    let wraptrue = shallow(<NewMonitor status={true}/>)
    expect(wraptrue.find(<Image source={require('../components/assets/porto.png')}/>)).toBeDefined()
  })
  it('should render the proper image if status is false', () => {
    let wrapfalse = shallow(<NewMonitor status={false}/>)
    expect(wrapfalse.find(<Image source={ require('../components/assets/dooropen.png')} />)).toBeDefined()
  })
})

describe('<Text/> should render the correct output', () => {
  it('props type gas should render when true', () => {
    let wrapGas = shallow(<NewMonitor status={true} type={'gas'}/>)
    expect(wrapGas.find(<Text> Normal </Text>)).toBeDefined()
  })
  it('props type gas should render when false', () => {
    let wrapGas = shallow(<NewMonitor status={false} type={'gas'}/>)
    expect(wrapGas.find(<Text> Warning </Text>)).toBeDefined()
  })
  it('props type door should render when true', () => {
    let wrapDoor = shallow(<NewMonitor status={true} type={'door'}/>)
    expect(wrapDoor.find(<Text> Closed </Text>)).toBeDefined()
  })
  it('props type door should render when false', () => {
    let wrapDoor = shallow(<NewMonitor status={false} type={'door'}/>)
    expect(wrapDoor.find(<Text> Open </Text>)).toBeDefined()
  })
})