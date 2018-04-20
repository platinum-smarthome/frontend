import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default class LogoHead extends Component {
  render() {
    return (
      <View style={ styles.box }>
        <Image style={ styles.logo } source={require('../components/assets/fortress_logo.png')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    flexGrow: 1,
    paddingTop: 6,
    textAlign: 'center',
  },
  logo: {
    flex: 1,
    height: null,
    width: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
  }
})