import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, FlatList, ScrollView, StatusBar } from 'react-native';
import { connect } from 'react-redux'
import Member from '../components/Member'
import PinText from '../components/PinText'
import * as Animatable from 'react-native-animatable';

class Members extends Component {

  renderItem = ({ item }) => {
    return <Member data={ item } />
  }

  keyExtractor = (user, index) => `member-${user.deviceId}`

  render() {
    let userlist = this.props.users
    let arr = []
    for (let user in userlist) {
      arr.push(userlist[user])
    }
    return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <StatusBar
        hidden={true}
      />
      <View style={{alignItems: 'center', flex: 1}}>
        <Image style={ styles.logo } source={require('../components/assets/fortress_logo.png')} />
        <Image style={ styles.img } source={require('../components/assets/familia.png')} />
        <PinText text={'Members List'}/>
      </View>
      <FlatList 
        data={ arr }
        keyExtractor= { this.keyExtractor }
        renderItem={ this.renderItem }
      />
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1, 
    width: '100%', 
    backgroundColor: '#34b8ed',
  },
  logo: {
    marginVertical: 10, 
    height: 40, 
    width: 170
  },
  img: {
    marginTop: 20,
    width: 120, 
    height: 120
  }
})

function mapStateToProps (state) {
  return {
    users: state.MemberList.users
  }
}

export default connect(mapStateToProps, null)(Members)