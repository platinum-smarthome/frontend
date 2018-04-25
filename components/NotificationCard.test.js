import React, { Component } from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import { notificationsDelete } from '../store/notificationLogs/notificationLogs.actions'
import { dateDisplayFormater } from '../helpers/date.helper'
import NotificationCard from './NotificationCard'
import NotificationCardFooter from './NotificationCard.footer'
import { Text, View, Image, TouchableOpacity } from 'react-native'

enzyme.configure({ adapter: new Adapter()})

let wrapper
let data
let mockFunction

beforeEach(() => {
  data = {
    id: '-LArsqVLs2p0JFcBT6Sd',
    title: 'Notification Door Alarm',
    desciription: 'Door alarm detected object. Please check the picture sent to see more clearly',
    createdAt: 1524577298583,
    imgUrl: 'http://res.cloudinary.com/eksa/image/upload/v1524577298/mbrpq3w82txgqxqqb0tg.jpg'
  }
  mockFunction = jest.fn()
  wrapper = shallow(<NotificationCard data={data} press={mockFunction}/>)
})

describe('<NotificationCard/>', () => {
  it('should render <NotificationCard/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<NotificationCard/> child is rendered', () => {
  it('Should render <View/>', () => {
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('View').length).toBe(2)  
  })
  it('Should render <Text/>', () => {
    expect(wrapper.find(<Text/>)).toBeDefined()
    expect(wrapper.find('Text').length).toBe(3)  
  })
  it('Should render <NotificationCardFooter/>', () => {
    expect(wrapper.find(<NotificationCardFooter/>)).toBeDefined()
    expect(wrapper.find('NotificationCardFooter').length).toBe(1)  
  })
})

describe('<NotificationCardFooter/> can remove log', () => {
  it('Should be able to remove log by press', () => {
    expect(mockFunction).not.toHaveBeenCalled()
    wrapper.find('NotificationCardFooter').at(0).props().onPress()
  })
})