import React, { Component } from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'
import store from '../store/store'

import NewUserForm from './NewUserForm'
import InputTextForm from './InputTextForm'
import { Text, View } from 'react-native'

enzyme.configure({ adapter: new Adapter()})

let wrapper

beforeEach(() => {
  wrapper = shallow(<NewUserForm store={store}/>)
})

describe('<NewUserForm/>', () => {
  it('should render <NewUserForm/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<NewUserForm/> child is rendered', () => {
  it('Should render <View/>', () => {
    expect(wrapper.find(<View/>)).toBeDefined()
  })
  it('Should render <Text/>', () => {
    expect(wrapper.find(<InputTextForm/>)).toBeDefined()
  })
})

describe('snapshot testing', () => {
  it('snapshot', () => {
    const tree = renderer.create(<NewUserForm store={store}/>)
    expect(tree).toMatchSnapshot()
  })
})