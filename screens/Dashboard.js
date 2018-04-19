import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TouchAbleText from '../components/TouchAbleText'

class Dashboard extends Component {
  render() {
    return (
      <View>
        <Text> Dashboard </Text>
        <TouchAbleText
          text={ 'Add New User' }
          onPress={ () => this.props.navigation.navigate('AddNewUser') }
        />
      </View>
    )
  }
}

export default Dashboard