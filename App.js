console.disableYellowBox = true
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Home from './screens/Home'
import Dashboard from './screens/Dashboard'
import Bell from './components/Bell'
import LogoHead from './components/LogoHead'
import Drawer from './components/Drawer'
import CreateNewHome from './screens/CreateNewHome'
import AddNewUser from './screens/AddNewUser'
import Notify from './screens/Notify'
import HousePin from './screens/HousePin'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#34b8ed',
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    elevation: 0,
  },
})

// const PrimaryNav = StackNavigator({
//   Home: { screen: Home },
//   drawerStack: { screen: drawerNavigation }
// }, {
//   headerStyle: styles.header,
//   headerTitle: <LogoHead />,
//   initialRouteName: 'Home'
// })

const RootStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerStyle: styles.header,
      headerTitle: <LogoHead/>,
    },
  },
  CreateNewHome: {
    screen: CreateNewHome,
    navigationOptions: {
      headerStyle: styles.header,
      headerTitle: <LogoHead />,
      headerTintColor: '#fff'
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      headerStyle: styles.header,
      headerLeft: <Drawer/>,
      headerTitle: <LogoHead/>
    }
  },
  Notify: {
    screen: Notify,
    navigationOptions: {
      headerStyle: styles.header,
      headerTitle: 'Notification',
      headerTintColor: '#fff'
    }
  },
  AddNewUser: {
    screen: AddNewUser,
    navigationOptions: {
      headerStyle: styles.header,
      headerTitle: <LogoHead/>
    }
  },
  HousePin: {
    screen: HousePin,
    navigationOptions: {
      headerStyle: styles.header,
      headerTitle: <LogoHead/>
    }
  }
}, {
  initialRouteName: 'Home',
})

export default class App extends React.Component {
  render() {
    return (
        <RootStack/>
    )
  }
}
