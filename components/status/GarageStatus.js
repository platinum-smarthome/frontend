import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class GarageStatus extends Component {
  render() {
    return (
    <View style={styles.textContent}>
      <Text style={styles.alarmText}> { this.props.text } </Text>
      {
        this.props.status ?
        <Text style={styles.locked}> Closed </Text> :
        <Text style={styles.unlocked}> Open </Text>
      }
    </View>
    )
  }
}

const styles = StyleSheet.create({
  textContent: {
    paddingVertical: 10
  },
  alarmText: {
    fontSize: 24,
    fontWeight: '300',
    color: '#333333'
  },
  locked: {
    fontSize: 16,
    fontWeight: '300',
    color: '#006ac6'
  },
  unlocked: {
    fontSize: 16,
    fontWeight: '300',
    color: 'red'
  }
})
