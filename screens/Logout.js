import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux'

import { userLogout } from '../store/data/data.actions'

import TouchAbleText from '../components/TouchAbleText'

class Logout extends Component {
  render () {
    /* istanbul ignore next */
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true}
        />
        <Image style={ styles.logo } source={require('../components/assets/fortaleza.png')}/>
      </View>
    )
  }

  /* istanbul ignore next */
  componentDidMount () {
    /* istanbul ignore next */
    this.props.userLogout()
    /* istanbul ignore next */
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

/* istanbul ignore next */
function mapDispatchToProps (dispatch) {
  return {
    /* istanbul ignore next */
    userLogout: () => dispatch(userLogout())
  }
}

export default connect(null, mapDispatchToProps)(Logout)