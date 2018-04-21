import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux'

import PinText from '../components/PinText'

class Members extends Component {
  render() {
    let userlist = this.props.users
    let arr = []
    for (let user in userlist) {
      arr.push(userlist[user])
    }
    console.log(arr)
    return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image style={{ marginVertical: 10, height: 40, width: 170}} source={require('../components/assets/fortress_logo.png')} />
        <Image style={{ marginTop: 20, width: 120, height: 120}} source={require('../components/assets/familia.png')} />
        <PinText text={'Members List'}/>
      </View>
      { arr.map(user => (
          <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row', borderBottomColor:'rgba(255, 255, 255, 0.4)', borderBottomWidth: 1, padding: 15}}>
            <View>
            <Image style={{width: 50, height: 50}} source={require('../components/assets/hombre.png')}/>
            </View>
            <View>
              <Text style={{fontSize: 18, fontWeight: '200', color: '#fff'}}> {user.username} </Text>
              <Text> {user.email} </Text>
            </View>
            <View style={{position: 'absolute', marginTop: 24, right: 12}}>
              <Text style={{fontSize: 12, fontWeight: '200', color: 'rgba(255,255,255,0.7)', justifySelf:'flex-end'}}> device #{user.deviceId} </Text>
            </View>
          </View>
        ))
      }
    </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34b8ed',
    // alignItems: 'center',
  }
})

function mapStateToProps (state) {
  return {
    users: state.HomeData.users
  }
}

export default connect(mapStateToProps, null)(Members)