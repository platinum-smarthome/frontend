import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class TouchAbleText extends Component {
  render() {
    return (
        <Text
          style={ styles.text }
          onPress={ this.props.onPress }
        >{this.props.text}</Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    opacity: 0.85,
    fontWeight: '200',
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  }
})

export default TouchAbleText