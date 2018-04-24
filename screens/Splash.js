import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import InputTextForm from '../components/InputTextForm';
import NewUserForm from '../components/NewUserForm'
import PinText from '../components/PinText'

import { fetchHomeData } from '../store/homeData/homeData.actions'
import { watchNotification } from '../store/notificationLogs/notificationLogs.actions'

class Splash extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Image style={ styles.logo } source={require('../components/assets/fortaleza.png')}/>
        {
          !this.props.userDataLoading &&
          this.props.navigation.navigate('Login')
        }
      </View>
    )
  }
  componentDidMount () {
    this.props.fetchHomeData()
    this.props.watchNotification(this.props.lastNotified)
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
    userDataLoading: state.UserData.fectUserDataLoading
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchHomeData,
  watchNotification
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Splash)