import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'

export default class NotificationCardFooter extends Component {
  render() {
    return (
      <View style={styles.footerBorder}>
        <TouchableHighlight
          style={styles.box}
          onPress={ this.props.onPress }
        >
          <Text style={styles.footerText}> DELETE LOGS </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footerBorder: {
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#d3d3d3',
    paddingTop: 10,
    paddingBottom: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: {
    color: '#fff',
    padding: 8,
  },
  box: {
    backgroundColor: 'red',
    borderRadius: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderRightColor: '#a80000',
    borderBottomColor: '#a80000'
  }
})
