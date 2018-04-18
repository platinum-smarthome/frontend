import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class ForgotText extends Component {
  render() {
    return (
      <View style={styles.align}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  align: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 5,
  },
  text: {
    color: '#fff',
    opacity: 0.85,
    fontWeight: '200',
    fontSize: 14
  }
})
export default ForgotText