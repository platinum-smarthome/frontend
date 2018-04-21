import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { getData } from '../store/data/data.actions'
import { fetchHomeData } from '../store/homeData/homeData.actions'
import { devicePinUpdate } from '../store/data/data.actions'

import PinText from '../components/PinText'
import Keypad from '../components/Keypad'
import Bullet from '../components/Bullet'
import ForgotText from '../components/ForgotText'
import TouchAbleText from '../components/TouchAbleText'
import CreateNewHome from './CreateNewHome';

import IMEI from 'react-native-imei';

class Home extends Component {
  pressButtonDevice (e) {
    let newPin = [...this.props.devicePin]
    let index = newPin.indexOf('')
    newPin.splice(index, 1, e)
    let payload = {
      userPin: this.props.userPin,
      input: newPin
    }
    this.props.devicePinUpdate(payload)
  }
  removePinDevice () {
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
    this.props.devicePinUpdate(payload)
  }

  render () {
    return (this.props.userLogin) ?
    this.props.navigation.navigate('App') :
    (
      <View style={styles.container}>
        <View style={{marginVertical: 10}}/>
        <PinText text={'Enter Your PIN Device'} />
        <Bullet pin={this.props.devicePin}/>
        {/* <ForgotText text={'Forgot Password?'} /> */}
        <View style={{marginVertical: 5}}/>
        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
          <Text style={{color: '#fff'}}> New to Fortress ?  </Text>
          <TouchAbleText
            text={ 'Register Here' }
            onPress={ () => {console.log('kena');this.props.navigation.navigate('CreateNewHome')} }
          /> 
        </View>
        <View style={styles.end}>
          <Keypad 
            press={ (e) =>this.pressButtonDevice(e) } 
            remove={ () => this.removePinDevice() }
          />
        </View>
      </View>
    )
  }

  componentDidMount () {
    // this.props.fetchHomeData()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34b8ed',
  },
  end: {
    marginTop: 40,
    justifyContent: 'flex-end'
  }
})

function mapStateToProps (state) {
  return {
    devicePin: state.data.devicePin,
    data: state.data,
    userLogin: state.data.userLogin,
    userPin: state.UserData.pin,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    devicePinUpdate: (payload) => dispatch(devicePinUpdate(payload)),
    fetchHomeData: () => dispatch(fetchHomeData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)