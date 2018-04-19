import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { getData } from '../store/data/data.actions'
import { fetchHomeData } from '../store/homeData/homeData.actions'

import PinText from '../components/PinText'
import Keypad from '../components/Keypad'
import Bullet from '../components/Bullet'
import ForgotText from '../components/ForgotText'
import TouchAbleText from '../components/TouchAbleText'

class Home extends Component {
  render () {
    return (this.props.userLogin) ?
    this.props.navigation.navigate('Dashboard') :
    (
      <View style={styles.container}>
        <PinText text={'Enter Your PIN Device'} />
        <Bullet/>
        <ForgotText text={'Forgot Password?'} />
        <TouchAbleText
          text={ 'Create New Home' }
          onPress={ () => this.props.navigation.navigate('CreateNewHome') }
        />
        <View style={styles.end}>
          <Keypad/>
        </View>
      </View>
    )
  }

  componentDidMount () {
    let payload = ''
    // this.props.getData()
    this.props.fetchHomeData(payload)
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
    // getData: () => dispatch(getData()),
    fetchHomeData: () => dispatch(fetchHomeData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)