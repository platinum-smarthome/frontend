import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import TouchAbleText from '../components/TouchAbleText';
import { database } from '../firebase/firebase';

class Dashboard extends Component {
  render() {
    return (
      <View>
        <Text> { JSON.stringify(this.props.homeId) } </Text>
        <TouchAbleText
          text={ 'Add New User' }
          onPress={ () => this.props.navigation.navigate('AddNewUser') }
        />
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    homeId: state.HomeData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    // getData: () => dispatch(getData()),
    // fetchHomeData: () => dispatch(fetchHomeData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)