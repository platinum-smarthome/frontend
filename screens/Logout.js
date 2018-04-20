import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { userLogout } from '../store/data/data.actions'

import TouchAbleText from '../components/TouchAbleText'

class Home extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TouchAbleText
          text={ 'Logout . . .' }
        />
        {/* { this.props.userLogout() } */}
      </View>
    )
  }

  componentDidMount () {
    this.props.userLogout()
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

function mapDispatchToProps (dispatch) {
  return {
    userLogout: () => dispatch(userLogout())
  }
}

export default connect(null, mapDispatchToProps)(Home)