
import React, { Component } from 'react'
import { Text, View, Image, ScrollView, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import CardTitle from '../components/CardTitle'
import AlarmType from '../components/AlarmType'
import SwitchType from '../components/SwitchType'
import Cctv from '../components/Cctv'
import TouchAbleText from '../components/TouchAbleText'
import Bell from '../components/Bell'
import { connect } from 'react-redux'
import { getSensorStatus } from '../store/sensors/sensor.actions'

class Dashboard extends Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: (
      <TouchableOpacity onPress={ () => navigation.navigate('Notify') }>
        <Bell/>
      </TouchableOpacity>
    )
  })

  render() {
    return (
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.card}>
            <CardTitle imgLogo={require('../components/assets/cctv.png')} text={'Monitor'} />
            <Cctv imgLogo={require('../components/assets/watchhouse.png')} text={'Watch House'} />
            <AlarmType imgLogo={require('../components/assets/co2icon.png')} type={'gas'} text={'Carbon Dioxide Sensor'} status={true} />
            <AlarmType imgLogo={require('../components/assets/garage.png')} type={'garage'} text={'Garage'} status={false} />
            <AlarmType imgLogo={require('../components/assets/motion.png')} type={'door'} text={'Motion'} status={true} />
          </View>
          <View style={styles.card}>
            <CardTitle imgLogo={require('../components/assets/megaphone.png')} text={'Alarms'} />
            <AlarmType imgLogo={require('../components/assets/access.png')} type={'door'} text={'Main Door'} status={false} />
          </View>
            { !this.props.sensors.length && 
              (<View style={styles.card}>
                <CardTitle imgLogo={require('../components/assets/sensors.png')} text={'Sensors'} />
                  <SwitchType imgLogo={require('../components/assets/motionsensor.png')} type={'door'} text={'Motion: Door'} status={this.props.sensors.sensors.door} />
                  <SwitchType imgLogo={require('../components/assets/motionsensor.png')} type={'garage'} text={'Motion: Garage'} status={this.props.sensors.sensors.garage} />
                  <SwitchType imgLogo={require('../components/assets/presion.png')} type={'gas'} text={'Gas'} status={this.props.sensors.sensors.gas} />
              </View>) 
            }
          <Text> Dashboard </Text>
          <TouchAbleText
            text={ 'Add New User' }
            onPress={ () => this.props.navigation.navigate('AddNewUser') }
          />       
        </View> 
      </ScrollView>
    )
  }
  componentDidMount () {
    this.props.getSensorStatus()
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
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
    homeId: state.HomeData,
    sensors: state.sensors
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getSensorStatus: () => dispatch(getSensorStatus())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)