
import React, { Component } from 'react'
import { Text, View, Image, ScrollView, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import CardTitle from '../components/CardTitle'
import AlarmType from '../components/AlarmType'
import MonitorType from '../components/MonitorType'
import NewMonitor from '../components/NewMonitor'
import TopCardTitle from '../components/TopCardTitle'
import SwitchType from '../components/SwitchType'
import Cctv from '../components/Cctv'
import TouchAbleText from '../components/TouchAbleText'
import Bell from '../components/Bell'
import { connect } from 'react-redux'
import { getSensorStatus } from '../store/sensors/sensor.actions'
import { loadHomePin, homeLock } from '../store/housePin/housePin.actions'
import { watchNotification } from '../store/notificationLogs/notificationLogs.actions'

class Dashboard extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.body}>
          <View style={{marginTop: 1}}/>
          <View style={styles.card}>
          <TopCardTitle img={require('../components/assets/cctv.png')} />
          <View style={{justifyContent: 'space-around', flexDirection: 'row', backgroundColor: '#81d4fa', paddingVertical: 20}}>
            <NewMonitor text={'Door'} img={ require('../components/assets/porto.png') } status={ this.props.alarms.door } type='door'/>
            <NewMonitor text={'Carbon Dioxide'} img={ require('../components/assets/co2.png') } status={ this.props.alarms.gas } type='gas'/>
            <NewMonitor text={'Garage'} img={ require('../components/assets/garages.png') } status={ this.props.alarms.garage } type='door'/>
          </View>
          </View>
          <View style={styles.card}>
            <CardTitle imgLogo={require('../components/assets/megaphone.png')} text={'Alarms'} />
            <AlarmType text={'Main Door'} status={this.props.housePin.houseLock} lock={ () => this.props.homeLock() } press={ () => this.props.navigation.navigate('HousePin')} />
          </View>
            { !this.props.sensors.length && 
              (<View style={styles.card}>
                <CardTitle imgLogo={require('../components/assets/sensors.png')} text={'Sensors'} />
                  <SwitchType imgLogo={require('../components/assets/motionsensor.png')} type={'door'} text={'Motion: Door'} status={this.props.sensors.sensors.door} />
                  <SwitchType imgLogo={require('../components/assets/motionsensor.png')} type={'garage'} text={'Motion: Garage'} status={this.props.sensors.sensors.garage} />
                  <SwitchType imgLogo={require('../components/assets/presion.png')} type={'gas'} text={'Gas'} status={this.props.sensors.sensors.gas} />
              </View>) 
            }
        </View> 
      </ScrollView>
    )
  }
  componentDidMount () {
    this.props.getSensorStatus()
    this.props.loadHomePin()
    this.props.watchNotification(this.props.lastNotified)
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    height: '100%',
    backgroundColor: '#d3d3d3'
  },
  card: {
    backgroundColor: '#fff',
    borderTopWidth: 3,
    borderTopColor: '#3db3e2',
    marginTop: 1,
    marginBottom: 2
  },
})

function mapStateToProps (state) {
  return {
    userLogin: state.data.userLogin,
    sensors: state.sensors,
    housePin: state.housePin,
    lastNotified: state.NotificationLogs.lastNotified,
    alarms: state.HomeData.alarms
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getSensorStatus: () => dispatch(getSensorStatus()),
    loadHomePin: () => dispatch(loadHomePin()),
    homeLock: () => dispatch(homeLock()),
    watchNotification: (payload) => dispatch(watchNotification(payload))  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)