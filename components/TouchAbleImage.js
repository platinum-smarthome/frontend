import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native'

export default class TouchAble extends Component {
  render() {
    console.log(`./assets/${this.props.image}.png`)
    return (
      <TouchableHighlight
        style={{marginHorizontal: 12}}
        onPress={ this.props.onPress }
      >
        <Image style={ styles.logo } source={require('./assets/info-2-16.png')}/>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    height: null,
    alignSelf: 'center',
    resizeMode: 'contain',
  }
})
