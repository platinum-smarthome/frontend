import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default class About extends Component {
  render() {
    return (
      <View style={styles.body}>
        <View style={{alignItems: 'center', marginTop: 16}}>
          <Text style={styles.shadow}> Team Fortress </Text>
        </View>
        <View>
          {/* marquee */}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#34b8ed'
  },
  shadow: {
    fontSize: 26, 
    color: '#fff', 
    fontWeight: '400', 
    // textShadowColor: '#ff7043',
    // textShadowOffset: {width: 3, height: 1},
    // textShadowRadius: 10
  }
})