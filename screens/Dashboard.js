import React, { Component } from 'react'
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native'
import CardTitle from '../components/CardTitle'
import AlarmType from '../components/AlarmType'
import Cctv from '../components/Cctv'
import TouchAbleText from '../components/TouchAbleText'

class Dashboard extends Component {
  render() {
    return (

      <ScrollView>
      <View style={styles.body}>
        <View style={styles.card}>
          <CardTitle imgLogo={require('../components/assets/cctv.png')} text={'Monitor'} />
          <Cctv imgLogo={require('../components/assets/watchhouse.png')} text={'Watch House'} />
          <AlarmType imgLogo={require('../components/assets/co2icon.png')} type={'gas'} text={'Carbon Dioxide Sensor'} status={true} />
          <AlarmType imgLogo={require('../components/assets/garage.png')} type={'garage'} text={'Garage'} status={true} />
        </View>
        <View style={styles.card}>
          <CardTitle imgLogo={require('../components/assets/megaphone.png')} text={'Alarms'} />
          <AlarmType imgLogo={require('../components/assets/access.png')} type={'door'} text={'Main Door'} status={true} />
          <AlarmType imgLogo={require('../components/assets/motion.png')} type={'door'} text={'Motion'} status={true} />
        </View>
        <View style={styles.card}>
          <CardTitle imgLogo={require('../components/assets/sensors.png')} text={'Sensors'} />
          <AlarmType imgLogo={require('../components/assets/motionsensor.png')} type={'door'} text={'Motion Detection'} status={true} />
          <AlarmType imgLogo={require('../components/assets/presion.png')} type={'door'} text={'Gas'} status={true} />
        </View>
      {/* <View>
        <Text> Dashboard </Text>
        <TouchAbleText
          text={ 'Add New User' }
          onPress={ () => this.props.navigation.navigate('AddNewUser') }
        />

      </View> */}
      </ScrollView>
    )
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

export default Dashboard