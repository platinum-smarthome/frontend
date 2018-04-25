import React, { Component } from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'
import store from '../store/store'

import Bell from './Bell'
import { Text, View, Image } from 'react-native'

enzyme.configure({ adapter: new Adapter()})

let wrapper
let log
let inst

beforeEach(() => {
  log = [{
    id: "-LArspCWxzbWktRnTEdQ",
    title: "Notification Garage Alarm",
    description: "Garage alarm detected object.",
    createdAt: 1524577293282
  }, {
    id: "-LArsqVLs2p0JFcBT6Sd",
    title: "Notification Door Alarm",
    description: "Door alarm detected object.",
    createdAt: 1524577298583
  }]
  wrapper = shallow(<Bell store={store} logs={log} userlastSeen={1524577290000}/>)
  inst = wrapper.dive().instance()
})

describe('<Bell/>', () => {
  it('should render <Bell/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<Bell/> methods', () => {
  it('should call <Bell/> instance newNotificationCounter', () => {
    expect(inst).toHaveProperty('newNotificationCounter')
    
  })
  it('should render notification counts', () => {
    let result = inst.newNotificationCounter()
    // console.log(result)
    expect(result).toBe(0)
  })

})

describe('snapshot testing', () => {
  it('snapshot', () => {
    const tree = renderer.create(<Provider store={store}><Bell/></Provider>)
    expect(tree).toMatchSnapshot()
  })
})

