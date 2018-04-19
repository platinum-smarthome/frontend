import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native'
import CO2Status from './status/CO2Status'
import GarageStatus from './status/GarageStatus'
import DoorStatus from './status/DoorStatus'

class AlarmType extends Component {
  render() {
    return (
      <View style={styles.alarmTypes}>
        <View>
          <Image style={styles.alarmImg} source={ this.props.imgLogo }/>
        </View>
        {
          (this.props.type === 'gas') ?
          <CO2Status text={ this.props.text } status={ this.props.status }/> :
          (this.props.type === 'garage') ?
          <GarageStatus text={ this.props.text } status={ this.props.status }/> :
          <DoorStatus text={ this.props.text } status={ this.props.status }/>
        }
      </View>
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