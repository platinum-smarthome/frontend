import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class InputErrorText extends Component {
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
    marginTop: 3,
    marginBottom: 3,
    height: 10,
  },
  homeTitle: {
    color: '#D50000',
    fontSize: 10,
    fontWeight: '300',
  }
})

export default InputErrorText
