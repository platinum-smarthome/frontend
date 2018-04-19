import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { getData } from '../store/data/data.actions'

import PinText from '../components/PinText'
import Keypad from '../components/Keypad'
import Bullet from '../components/Bullet'
import ForgotText from '../components/ForgotText'

class Home extends Component {
  render () {
    return (this.props.userLogin) ?
    this.props.navigation.navigate('Dashboard') :
    (
      <View style={styles.container}>
        <PinText text={'Enter Your PIN Device'} />
        <Bullet/>
        <ForgotText text={'Forgot Password?'} />
        <View style={styles.end}>
          <Keypad/>
        </View>
      </View>
    )
  }

  componentDidMount () {
    this.props.getData()
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
    data: state.data,
    userLogin: state.data.userLogin    
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getData: () => dispatch(getData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)