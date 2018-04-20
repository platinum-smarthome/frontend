import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

class Bullet extends Component {
  render() {
    return (
      <View style={styles.aligner}>
        { 
          this.props.pin.map(val => (val) ?
             <Text style={styles.white}>&#8226;</Text> :
             <Text style={styles.grey}>&#8226;</Text>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  aligner: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 30,
  },
  grey: {
    color: '#303030',
    paddingHorizontal: 12,
    fontSize: 40,
    opacity: 0.5
  },
  white: {
    color: '#fff',
    paddingHorizontal: 12,
    fontSize: 40,
  }
})

export default Bullet