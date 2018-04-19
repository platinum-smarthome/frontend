console.disableYellowBox = true
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Home from './screens/Home'
import Dashboard from './screens/Dashboard'
import Bell from './components/Bell'
import LogoHead from './components/LogoHead'
import Drawer from './components/Drawer'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#34b8ed',
    borderBottomWidth: 0,
  }
})

const RootStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerStyle: styles.header,
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      headerStyle: styles.header,
      headerLeft: <Drawer/>,
      headerRight: <Bell/>,
      title: <LogoHead/>
    }
  }
}, {
  initialRouteName: 'Dashboard',
})

export default class App extends React.Component {
  render() {
    return (
        <RootStack/>
    )
  }
}
