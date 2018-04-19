import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default class LogoHead extends Component {
  render() {
    return (
      <View style={{alignSelf: 'center', paddingTop: 6 }}>
        <Image style={styles.logo} source={require('../components/assets/fortress_logo.png')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    height: null,
    width: 150,
    resizeMode: 'contain'
  }
})