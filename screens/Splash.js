import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import InputTextForm from '../components/InputTextForm';
import NewUserForm from '../components/NewUserForm'
import PinText from '../components/PinText'

import { fetchHomeData } from '../store/homeData/homeData.actions'
import { getSensorStatus } from '../store/sensors/sensor.actions'
import { watchNotification } from '../store/notificationLogs/notificationLogs.actions'
import { fetchMemberList } from '../store/memberList/memberList.actions'
import { getAlarmsStatus } from '../store/alarms/alarms.actions'


class Splash extends Component {

  render () {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true}
        />
        <Image style={ styles.logo } source={require('../components/assets/fortaleza.png')}/>
        {
          !this.props.fetchMemberListLoading &&
          this.props.navigation.navigate('Login')
        }
      </View>
    )
  }
  componentDidMount () {
    this.props.fetchHomeData()
    this.props.fetchMemberList()
    this.props.getSensorStatus()
    this.props.watchNotification(this.props.lastNotified)
    this.props.getAlarmsStatus()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34b8ed',
    alignItems: 'center'
  },
  logo: {
    flex: 1,
    height: null,
    width: 82,
    alignSelf: 'center',
    resizeMode: 'contain',
  }
})

function mapStateToProps (state) {
  return {
    lastNotified: state.NotificationLogs.lastNotified,    
    fetchMemberListLoading: state.MemberList.fetchMemberListLoading,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchHomeData,
  watchNotification,
  getSensorStatus,
  fetchMemberList,
  getAlarmsStatus
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Splash)