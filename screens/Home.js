import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
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
import * as Animatable from 'react-native-animatable';

class Home extends Component {
  constructor () {
    super()
    this.state ={
      shake: false
    }
  }
  pressButtonDevice (e) {
    let newPin = [...this.props.devicePin]
    let index = newPin.indexOf('')
    newPin.splice(index, 1, e)
    let payload = {
      userPin: this.props.userPin,
      input: newPin
    }
    if ((payload.input.join('').length === 6) && payload.userPin != payload.input.join('')) {
      this.shake()
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

  handleViewRef = ref => this.view = ref;
  
  shake = () => this.view.shake(600).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));

  render () {
    return (this.props.userLogin) ?
    this.props.navigation.navigate('App') :
    (
      <View style={styles.container}>
        {/* <Text> { IMEI.getImei() } </Text> */}
        {/* <Text> { this.props.devicePin } </Text> */}
        {/* <Text> { this.props.userPin } </Text> */}
        <View style={{marginVertical: 10}}/>
        <View>
          <PinText text={'Enter Your PIN Device'} />
          <Animatable.View animation="zoomInUp" easing="ease-in-out" ref={this.handleViewRef}>
            <Bullet pin={this.props.devicePin}/>
          </Animatable.View>
        </View>
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
    justifyContent: 'space-around'
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