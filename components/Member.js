import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'


class Member extends Component {
  render() {
    let { username, deviceId, email } = this.props.data
    return (
      <View style={styles.box}>
        <View>
        <Image style={styles.img} source={require('./assets/hombre.png')}/>
        </View>
        <View>
          <Text style={styles.user}> {username} </Text>
          <Text> {email} </Text>
        </View>
        <View style={styles.devicePos}>
          <Text style={styles.deviceText}> device #{deviceId} </Text>
        </View>
      </View>        
    )
  }
};

const styles = StyleSheet.create({
  box: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderBottomColor:'rgba(255, 255, 255, 0.4)',
    borderBottomWidth: 1,
    padding: 15
  },
  img: {
    width: 50,
    height: 50
  },
  user: {
    fontSize: 18, 
    fontWeight: '200', 
    color: '#fff'
  },
  devicePos: {
    position: 'absolute',
    marginTop: 24,
    right: 12
  },
  deviceText: {
    fontSize: 12,
    fontWeight: '200',
    color: 'rgba(255,255,255,0.7)',
  }
})

export default Member