import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class PinText extends Component {
  render() {
    return (
      <View style={styles.homeDiv}>
        <Text style={styles.homeTitle}>{this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  homeDiv: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  homeTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '300',
  }
})

export default PinText
