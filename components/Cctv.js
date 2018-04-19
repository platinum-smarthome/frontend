import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class Cctv extends Component {
  render() {
    return (
      <View style={styles.pad}>
        <View style={styles.align}>
          <Image style={styles.img} source={require('../components/assets/watchhouse.png')}/>
        </View>
        <View style={styles.align}>
          <Text style={styles.txt}> {this.props.text} </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pad: {
    paddingVertical:6, 
    borderBottomWidth: 1, 
    borderBottomColor: '#d3d3d3'
  },
  img: {
    width: 150,
    height: 150
  },
  align: {
    alignItems: 'center'
  },
  txt: {
    fontSize: 20,
    fontWeight: '200',
    color: '#333333'
  }
})
