import React, { Component } from 'react'
import enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import store from '../store/store'

import SwitchType from './SwitchType'
import { Text, View } from 'react-native'

enzyme.configure({ adapter: new Adapter()})

let wrapper
let mockFunction

beforeEach(() => {
  wrapper = shallow(<SwitchType store={store}/>)
  mockFunction = jest.fn()
})


describe('<SwitchType/>', () => {
  it('should render <SwitchType/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('Loading Test', () => {
  it('should render empty <Text>', () => {
    let wrap = shallow(<SwitchType store={store}/>)
    expect(wrap.find(<Text> </Text>)).toBeDefined()
  })
})
// describe('<SwitchType/> child is rendered', () => {
//   it('Should render <View/>', () => {
//     expect(wrapper.find(<View/>)).toBeDefined()
//     expect(wrapper.find('View').length).toBe(5)  
//   })
//   it('Should render <Text/>', () => {
//     expect(wrapper.find(<Text/>)).toBeDefined()
//     expect(wrapper.find('Text').length).toBe(5)  
//   })
// })

describe('snapshot testing', () => {
  it('snapshot', () => {
    const tree = renderer.create(<SwitchType store={store}/>)
    expect(tree).toMatchSnapshot()
  })
})