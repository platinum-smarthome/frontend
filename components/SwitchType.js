import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Switch } from 'react-native'
import { updateSensorStatus } from '../store/sensors/sensor.actions'
import { connect } from 'react-redux'

class SwitchType extends Component {
  render() {
    return (
      <View style={styles.switchTypes}>
        <View>
          <Image style={styles.switchImg} source={ this.props.imgLogo }/>
        </View>
        <View style={styles.textContent}>
          <Text style={styles.switchText}> { this.props.text } </Text>
          { this.props.sensors.loading ?
            <Text> </Text> :
            /* istanbul ignore next */
            this.props.houseLock ?
            (<View>
              <Text style={ this.props.status ? styles.locked : styles.unlocked}> {this.props.status ? 'On' : 'Off'} </Text>
              <Text style={styles.disabled}> Unlock Main Door to enable switch </Text>
            </View>) :
            this.props.status ? 
            <Text style={styles.locked}> On</Text> :
            <Text style={styles.unlocked}> Off</Text>
          }
        </View>
        <View style={styles.switchPos}>
        { this.props.sensors.loading ?
          /* istanbul ignore next */  
          ( <Image style={{width: 60, height: 60, marginTop: -16}} source={require('../components/assets/spinner.gif')} /> ) :
          ( <Switch onValueChange={(e) => this.props.updateSensorStatus({type: this.props.type, value: e })} value={ (this.props.status) ? true : false } disabled={this.props.houseLock}/> )
        }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  switchTypes: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  switchImg: {
    width: 64,
    height: 64,
    marginHorizontal: 15,
    marginVertical: 6
  },
  textContent: {
    paddingVertical: 4,
    flexDirection: 'column',
  },
  switchText: {
    fontSize: 22,
    fontWeight: '300',
    color: '#333333'
  },
  switchPos: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  disabled: {
    fontSize: 14,
    fontWeight: '300',
    color: '#d3d3d3'
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

function mapStateToProps (state) {
  return {
    sensors: state.sensors,
    houseLock: state.housePin.houseLock
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateSensorStatus: (payload) => dispatch(updateSensorStatus(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SwitchType)