console.disableYellowBox = true
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Home from './screens/Home'
import Dashboard from './screens/Dashboard'
import Bell from './components/Bell'
import LogoHead from './components/LogoHead'
import Drawer from './components/Drawer'
import CreateNewHome from './screens/CreateNewHome'
import AddNewUser from './screens/AddNewUser'


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
  CreateNewHome: {
    screen: CreateNewHome,
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
      headerTitle: <LogoHead/>
    }
  },
  AddNewUser: {
    screen: AddNewUser,
    navigationOptions: {
      headerStyle: styles.header,
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
