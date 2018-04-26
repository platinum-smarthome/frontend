import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native'

export default class TouchAble extends Component {
  render() {
    return (
      <TouchableHighlight
        style={{marginHorizontal: 16, borderRadius: 50}}
        onPress={ this.props.onPress }
        underlayColor='rgba(255,255,255,0.6)'
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
