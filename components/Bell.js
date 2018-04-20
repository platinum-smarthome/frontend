import React, { Component } from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

export default class Bell extends Component {
  render() {
    return (
      <View style={styles.pad}>
        <Image style={styles.img} source={require('../components/assets/alarma.png')}/>
        {/* if has notification then display the below */}
        <View style={styles.circle}>
          <Text style={styles.num}>{ 1 }</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  img: {
    width: 28,
    height: 28,
  },
  pad: {
    paddingHorizontal: 16,
  },
  circle: {
    position: 'absolute',
    left: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  num: {
    color: '#fff',
    fontSize: 12,
  }
})
