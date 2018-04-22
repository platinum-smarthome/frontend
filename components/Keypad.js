import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { devicePinUpdate } from '../store/data/data.actions'

class Keypad extends Component {
  render() {
    return (
      <View style={ styles.keybox }>
          <Text style={ styles.keypress } onPress={() => this.props.press('1')}>1</Text>
          <Text style={ styles.keypress } onPress={() => this.props.press('2')}>2</Text>
          <Text style={ styles.keypress } onPress={() => this.props.press('3')}>3</Text>
          <Text style={ styles.keypress } onPress={() => this.props.press('4')}>4</Text>
          <Text style={ styles.keypress } onPress={() => this.props.press('5')}>5</Text>
          <Text style={ styles.keypress } onPress={() => this.props.press('6')}>6</Text>
          <Text style={ styles.keypress } onPress={() => this.props.press('7')}>7</Text>
          <Text style={ styles.keypress } onPress={() => this.props.press('8')}>8</Text>
          <Text style={ styles.keypress } onPress={() => this.props.press('9')}>9</Text>
          <Text style={ styles.keypress } >&nbsp;</Text>
          <Text style={ styles.keypress } onPress={() => this.props.press('0')}>0</Text>
          <Text style={ styles.keypress } onPress={() => this.props.remove() }>&#8592;</Text>
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
    paddingVertical: 10,
    paddingHorizontal: 36,
    // marginHorizontal: 16
    marginHorizontal: 24
  }
});

export default Keypad