import React, { Component } from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'
import store from '../store/store'

import InputTextForm from './InputTextForm'
import { TextInput } from 'react-native'

enzyme.configure({ adapter: new Adapter()})

let wrapper

beforeEach(() => {
  wrapper = shallow(<InputTextForm/>)
})

describe('<InputTextForm/>', () => {
  it('should render <InputTextForm/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<InputTextForm/> child is rendered', () => {
  it('should render <TextInput/>' , () => {
    expect(wrapper.find(<TextInput/>)).toBeDefined()
    expect(wrapper.find('TextInput').length).toBe(1)
  })
})

describe('snapshot testing', () => {
  it('snapshot', () => {
    const tree = renderer.create(<InputTextForm/>)
    expect(tree).toMatchSnapshot()
  })
})