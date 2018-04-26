import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './App'

class Front extends React.Component {
  render () {
    return (
      <Provider store={ store }>
        <App/>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('frontend', () => Front)
