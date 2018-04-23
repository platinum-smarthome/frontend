import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import DoorStatus from './status/DoorStatus'

class AlarmType extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.status ? this.props.press : this.props.lock}>
        <View style={styles.alarmTypes}>
          <View>
            <Image style={styles.alarmImg} source={ this.props.status ? require('../components/assets/puerta.png') : require('../components/assets/access.png') }/>
          </View>
          <DoorStatus text={ this.props.text } status={ this.props.status }/>
          <TouchableOpacity style={styles.arrowPos}>
            <Image style={{ height: 30, width: 30}} source={ this.props.status ? require('../components/assets/greyarrow.png') : require('../components/assets/desbloqueado.png')} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  alarmTypes: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  alarmImg: {
    width: 64,
    height: 64,
    marginHorizontal: 15,
    marginVertical: 6
  },
  textContent: {
    paddingVertical: 10
  },
  alarmText: {
    fontSize: 24,
    fontWeight: '300',
    color: '#333333'
  },
  arrowPos: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: 25,
    paddingVertical: 20
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

export default AlarmType