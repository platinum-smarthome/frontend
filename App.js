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
import Logout from './screens/Logout'
import HousePin from './screens/HousePin'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#34b8ed',
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    elevation: 0,
  }
})

const DrawerNav = DrawerNavigator({
  Dashboard: { screen: Dashboard },
  ["Add New User"]: { screen: AddNewUser},
  ["Logout"]: { screen: Logout }
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
      headerTitle: <LogoHead/>
    }
  },
  Dashboard: {
    screen: DrawerNavigator({
      Dashboard: { screen: Dashboard },
      ["Add New User"]: { screen: AddNewUser},
      ["Logout"]: { screen: Logout }
    }),
    navigationOptions: {
      headerStyle: styles.header,
      headerLeft: <Drawer/>,
      headerTitle: <LogoHead/>
    }
  },
  Notify: {
    screen: DrawerNavigator({
      ["House Notifications"]: { screen: Notify },
      ["Add New User"]: { screen: AddNewUser},
      ["Logout"]: { screen: Logout }
    }),
    navigationOptions: {
      headerStyle: styles.header,
      headerTitle: 'Notification',
      headerTintColor: '#fff'
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
