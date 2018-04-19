import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { devicePinUpdate } from '../store/data/data.actions'

class Keypad extends Component {
  pressButton (e) {
    let newPin = [...this.props.devicePin]
    let index = newPin.indexOf('')
    newPin.splice(index, 1, e)
    let payload = {
      userPin: this.props.userPin,
      input: newPin
    }
    this.props.devicePinUpdate(payload)
  }
  removePin () {
    let newPin = [...this.props.devicePin]
    if (newPin.lastIndexOf('') != -1) {
      let index = newPin.indexOf('') - 1
      newPin.splice(index, 1, '')
    } else {
      newPin.splice(5, 1, '')
    }
    let payload = {
      userPin: this.props.userPin,
      input: newPin
    }
    this.props.devicePinUpdate(newPin)
  }
  render() {
    return (
      <View style={ styles.keybox }>
          <Text style={ styles.keypress } onPress={() => this.pressButton('1')}>1</Text>
          <Text style={ styles.keypress } onPress={() => this.pressButton('2')}>2</Text>
          <Text style={ styles.keypress } onPress={() => this.pressButton('3')}>3</Text>
          <Text style={ styles.keypress } onPress={() => this.pressButton('4')}>4</Text>
          <Text style={ styles.keypress } onPress={() => this.pressButton('5')}>5</Text>
          <Text style={ styles.keypress } onPress={() => this.pressButton('6')}>6</Text>
          <Text style={ styles.keypress } onPress={() => this.pressButton('7')}>7</Text>
          <Text style={ styles.keypress } onPress={() => this.pressButton('8')}>8</Text>
          <Text style={ styles.keypress } onPress={() => this.pressButton('9')}>9</Text>
          <Text style={ styles.keypress } >&nbsp;</Text>
          <Text style={ styles.keypress } onPress={() => this.pressButton('0')}>0</Text>
          <Text style={ styles.keypress } onPress={() => this.removePin()}>&#8592;</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  keybox: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  keypress: {
    flex: 1,
    color: '#fff',
    fontWeight: '200',
    fontSize: 30,
    paddingVertical: 16,
    paddingHorizontal: 48,
  }
});

function mapStateToProps (state) {
  return {
    devicePin: state.data.devicePin,
    userPin: state.UserData.pin
  }
}

function mapDispatchToProps (dispatch) {
  return {
    devicePinUpdate: (payload) => dispatch(devicePinUpdate(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Keypad)