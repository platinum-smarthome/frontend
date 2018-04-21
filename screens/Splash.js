import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchHomeData } from '../store/homeData/homeData.actions'
import InputTextForm from '../components/InputTextForm';
import NewUserForm from '../components/NewUserForm'
import PinText from '../components/PinText'

class Splash extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Image style={ styles.logo } source={require('../components/assets/fortaleza.png')}/>
        {
          !this.props.userDataLoading &&
          this.props.navigation.navigate('Home')
        }
      </View>
    )
  }
  componentDidMount () {
    this.props.fetchHomeData()
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

function mapStateToProps (state) {
  return {
    userDataLoading: state.UserData.fectUserDataLoading
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchHomeData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Splash)