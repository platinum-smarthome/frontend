import React, { Component } from 'react'
import enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import Keypad from './Keypad'
import { Text, View } from 'react-native'

enzyme.configure({ adapter: new Adapter()})

let wrapper
let mockFunction
let wrap

beforeEach(() => {
  wrapper = shallow(<Keypad />)
  mockFunction = jest.fn()
  mockFunctionRemove = jest.fn()
  wrap = shallow(<Keypad press={mockFunction} remove={mockFunctionRemove}/>)
})

describe('<Keypad/>', () => {
  it('should render <Keypad/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<Keypad/> child is rendered', () => {
  it('Should render <View/>', () => {
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('View').length).toBe(1)  
  })
  it('Should render <Text/>', () => {
    expect(wrapper.find(<Text/>)).toBeDefined()
    expect(wrapper.find('Text').length).toBe(12)  
  })
})

describe('<Text/> could be pressed', () => {
  it('Button 1 should be able to be pressed', () => {
    expect(mockFunction).not.toHaveBeenCalled()
    wrap.find('Text').at(0).props().onPress()
    expect(mockFunction).toHaveBeenCalled()
  })
  it('Button 2 should be able to be pressed', () => {
    expect(mockFunction).not.toHaveBeenCalled()
    wrap.find('Text').at(1).props().onPress()
    expect(mockFunction).toHaveBeenCalled()
  })
  it('Button 3 should be able to be pressed', () => {
    expect(mockFunction).not.toHaveBeenCalled()
    wrap.find('Text').at(2).props().onPress()
    expect(mockFunction).toHaveBeenCalled()
  })
  it('Button 4 should be able to be pressed', () => {
    expect(mockFunction).not.toHaveBeenCalled()
    wrap.find('Text').at(3).props().onPress()
    expect(mockFunction).toHaveBeenCalled()
  })
  it('Button 5 should be able to be pressed', () => {
    expect(mockFunction).not.toHaveBeenCalled()
    wrap.find('Text').at(4).props().onPress()
    expect(mockFunction).toHaveBeenCalled()
  })
  it('Button 6 should be able to be pressed', () => {
    expect(mockFunction).not.toHaveBeenCalled()
    wrap.find('Text').at(5).props().onPress()
    expect(mockFunction).toHaveBeenCalled()
  })
  it('Button 7 should be able to be pressed', () => {
    expect(mockFunction).not.toHaveBeenCalled()
    wrap.find('Text').at(6).props().onPress()
    expect(mockFunction).toHaveBeenCalled()
  })
  it('Button 8 should be able to be pressed', () => {
    expect(mockFunction).not.toHaveBeenCalled()
    wrap.find('Text').at(7).props().onPress()
    expect(mockFunction).toHaveBeenCalled()
  })
  it('Button 9 should be able to be pressed', () => {
    expect(mockFunction).not.toHaveBeenCalled()
    wrap.find('Text').at(8).props().onPress()
    expect(mockFunction).toHaveBeenCalled()
  })
  it('Button 0 should be able to be pressed', () => {
    expect(mockFunction).not.toHaveBeenCalled()
    wrap.find('Text').at(10).props().onPress()
    expect(mockFunction).toHaveBeenCalled()
  })
})

describe('<Text/> should be able to remove pin input', () => {
  it('Backspace button should be able to be pressed', () => {
    expect(mockFunctionRemove).not.toHaveBeenCalled()
    wrap.find('Text').at(11).props().onPress()
    expect(mockFunctionRemove).toHaveBeenCalled()
  })
})

describe('snapshot testing', () => {
  it('snapshot', () => {
    const tree = renderer.create(<Keypad/>)
    expect(tree).toMatchSnapshot()
  })
})