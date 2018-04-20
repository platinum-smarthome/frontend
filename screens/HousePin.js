import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import PinText from '../components/PinText'
import Bullet from '../components/Bullet'
import Keypad from '../components/Keypad'
import { connect } from 'react-redux'

class HousePin extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Image style={styles.img} source={require('../components/assets/clave.png')} />
        <PinText text={'Enter Your House Pin'}/>
        <Bullet pin={this.props.homePin}/>
        <View style={styles.end}>
          <Keypad />
        </View>
      </View>
    )
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
    homePin: state.HomeData.homePin
  }
}

 export default connect(mapStateToProps, null)(HousePin)