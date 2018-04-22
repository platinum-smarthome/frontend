import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';
import { connect } from 'react-redux'

import { userLogout } from '../store/data/data.actions'

import TouchAbleText from '../components/TouchAbleText'

class Home extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image style={ styles.logo } source={require('../components/assets/fortaleza.png')}/>
      </View>
    )
  }

  componentDidMount () {
    this.props.userLogout()
    this.props.navigation.navigate('Login')
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

function mapDispatchToProps (dispatch) {
  return {
    userLogout: () => dispatch(userLogout())
  }
}

export default connect(null, mapDispatchToProps)(Home)