import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class TopCardTitle extends Component {
  render() {
    return (
    <View style={ styles.container }>
      <View style={ styles.pad }>
        <Image style={ styles.img } source={ this.props.img } />
      </View>
      <View>
        <Text style={ styles.txt }> Monitor </Text>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1, 
    borderBottomColor: 'rgba(255,255,255, 0.6)', 
    flexDirection: 'row', 
    alignContent: 'flex-start', 
    backgroundColor: '#34b8ed'
  },
  img: {
    width: 25, 
    height: 25 
  },
  pad: {
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  txt: {
    justifyContent: 'center', 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: '500', 
    paddingVertical: 10
  }
})