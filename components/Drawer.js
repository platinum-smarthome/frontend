import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

class Drawer extends Component {
  render() {
    return (
      <View style={styles.pad}>
        <Image style={styles.img} source={require('../components/assets/menu.png')}/>
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
    justifyContent: 'center',
    paddingTop: 2,
    paddingHorizontal: 12,
  },
})

export default Drawer
