import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, AppState } from 'react-native'
import PinText from '../components/PinText'
import Bullet from '../components/Bullet'
import Keypad from '../components/Keypad'
import { connect } from 'react-redux'
import { homePinUpdate } from '../store/housePin/housePin.actions'

class HousePin extends Component {
  pressButtonHouse (e) {
    let newPin = [...this.props.userHomePin.housePin]
    let index = newPin.indexOf('')
    newPin.splice(index, 1, e)
    let payload = {
      homePin: this.props.homePin,
      input: newPin
    }
    this.props.homePinUpdate(payload)
  }
  removePinHouse () {
    let newPin = [...this.props.userHomePin.housePin]
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
    this.props.homePinUpdate(payload)
  }

  handleAppStateChange = (appState) => {
    if (appState.match(/inactive|background/)) {
      this.props.navigation.navigate('Logout')
    }
  }

  render() {
    return (!this.props.userHomePin.houseLock) ?
    this.props.navigation.goBack() :
    (<View style={styles.body}>
      <Image style={styles.img} source={require('../components/assets/clave.png')} />
      <PinText text={'Enter Your House Pin'}/>
      <Bullet pin={this.props.userHomePin.housePin}/>
      <View style={styles.end}>
        <Keypad 
          press={ (e) => this.pressButtonHouse(e) } 
          remove={ () => this.removePinHouse() }
        />
      </View>
    </View>
    )
  }

  componentDidMount () {
    AppState.addEventListener('change', this.handleAppStateChange)
  }

}

 const styles = StyleSheet.create({
   body: {
    flex: 1,
    backgroundColor: '#34b8ed',
   },
   img: {
    marginTop: 30,
    alignSelf: 'center',
    height: 100,
    width: 100
   },
   end: {
    marginTop: 10,
    justifyContent: 'flex-end'
  }
 })

function mapStateToProps (state) {
  return {
    homePin: state.HomeData.homePin,
    userHomePin: state.housePin
  }
}

function mapDispatchToProps (dispatch) {
  return {
    homePinUpdate: (payload) => dispatch(homePinUpdate(payload))
  }
}

 export default connect(mapStateToProps, mapDispatchToProps)(HousePin)