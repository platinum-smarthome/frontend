import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class Bullet extends Component {
  render() {
    return (
      <View style={styles.aligner}>
        { 
          this.props.devicePin.map(val => (val) ?
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

function mapStateToProps (state) {
  return {
    devicePin: state.data.devicePin
  }
}

export default connect(mapStateToProps, null)(Bullet)
