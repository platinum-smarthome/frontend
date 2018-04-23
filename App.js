import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { StackNavigator, DrawerNavigator, SwitchNavigator, DrawerItems } from 'react-navigation'
import Home from './screens/Home'
import Dashboard from './screens/Dashboard'
import Bell from './components/Bell'
import LogoHead from './components/LogoHead'
import Drawer from './components/Drawer'
import CreateNewHome from './screens/CreateNewHome'
import AddNewUser from './screens/AddNewUser'
import Notify from './screens/Notify'
import About from './screens/About'
import Logout from './screens/Logout'
import HousePin from './screens/HousePin'
import Splash from './screens/Splash'
import Members from './screens/Members'
import FullView from './screens/FullView'
import store from './store/store'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#34b8ed',
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    elevation: 0,
  },
})

const CustomDrawerContentComponent = (prop) => {
  return (
    <View style={{flex: 1}}>
      <View style={{paddingVertical: 25, borderBottomColor: 'rgba(255, 255, 255, 0.4)', borderBottomWidth: 1, alignItems: 'center'}}>
        <Image style={{height: 150, width: 150}} source={require('./components/assets/hombre.png')} />
        <Text style={{fontSize: 24, fontFamily: '100', marginTop: 12, color: '#fff'}}> { store.getState().UserData.username } </Text>
      </View>
      <DrawerItems {...prop} 
        activeTintColor='#2196f3' 
        activeBackgroundColor='rgba(0, 0, 0, .04)' 
        inactiveTintColor='rgba(0, 0, 0, .87)' 
        inactiveBackgroundColor='transparent' 
        style={{backgroundColor: '#000000'}} 
        labelStyle={{color: '#ffffff',  fontSize: 16, fontWeight: '200'}}
      />
    </View>
  )
}

const Main = StackNavigator({
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
      headerTintColor: '#fff',
      headerRight: <Text />
    }
  },
}, {
  initialRouteName: 'Home'
})

const EntryPoint = StackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({navigation}) => ({
      headerStyle: styles.header,
      headerLeft: (
      <TouchableOpacity onPress={ () => navigation.navigate('DrawerOpen')}>
        <Drawer/>
      </TouchableOpacity>
      ),
      headerTitle: <LogoHead/>,
      headerRight: (
      <TouchableOpacity onPress={ () => navigation.navigate('Notify') }>
        <Bell/>
      </TouchableOpacity>)
    })
  },
  Notify: {
    screen: Notify,
    navigationOptions: {
      headerStyle: styles.header,
      headerTitle: <LogoHead />,
      headerTintColor: '#fff',
      headerRight: <Text />
    }
  },
  AddNewUser: {
    screen: AddNewUser,
    navigationOptions: {
      headerStyle: styles.header,
      headerTitle: <LogoHead/>,
      headerTintColor: '#fff',
      headerRight: <Text />
    }
  },
  HousePin: {
    screen: HousePin,
    navigationOptions: {
      headerStyle: styles.header,
      headerTitle: <LogoHead/>,
      headerTintColor: '#fff',
      headerRight: <Text />
    }
  },
  FullView: {
    screen: FullView,
    navigationOptions: {
      headerStyle: styles.header,
      headerTitle: <LogoHead/>,
      headerTintColor: '#fff',
      headerRight: <Text />
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      headerStyle: styles.header,
      headerTitle: <LogoHead/>,
      headerTintColor: '#fff',
      headerRight: <Text />
    }
  }
}, {
  initialRouteName: 'Dashboard'
})

const Dash = DrawerNavigator({
  Dashboard: {
    screen: EntryPoint,
    navigationOptions: {
      drawerIcon: (
        <Image source={require('./components/assets/controlar.png')} style={{width:24, height:24}} />
      )
    }
  },
  ['Add New Member']: {
    screen: AddNewUser,
    navigationOptions: {
      drawerIcon: (
        <Image source={require('./components/assets/singleusuario.png')} style={{width:24, height:24}} />
      )
    }
  },
  ['Member List']: {
    screen: Members,
    navigationOptions: {
      drawerIcon: (
        <Image source={require('./components/assets/usuarios.png')} style={{width:24, height:24}} />
      ),
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      drawerIcon: (
        <Image source={require('./components/assets/libros.png')} style={{width:24, height:24}} />
      ),
    }
  },
  Logout: {
    screen: Logout,
    navigationOptions: {
      drawerIcon: (
        <Image source={require('./components/assets/salida.png')} style={{width:24, height:24}} />
      ),
      headerStyle: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, 0.4)',
      }
    },
  }
},{
  initialRouteName: 'Dashboard',
  drawerPosition: 'left',
  drawerBackgroundColor: '#34b8ed',
  headerMode: 'float',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
})

const RootStack = SwitchNavigator(
  {
    Splash: {
      screen: Splash
    },
    Login: {
      screen: Main,
      navigationOptions: {
        header: null
      }
    },
    App: {
      screen: Dash,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    initialRouteName: 'Splash'
  }
)

class App extends React.Component {
  render() {
    return (
      <RootStack/>
    )
  }
}

export default App