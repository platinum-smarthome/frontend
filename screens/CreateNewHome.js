import React, { Component } from 'react';
import { View, Button, StyleSheet, Image, ScrollView, AppState, KeyboardAvoidingView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IMEI from 'react-native-imei';

import { createNewHomeHandleInputChange, createNewHome, setCreateNewHomeMessage } from '../store/createNewHome/createNewHome.actions'
import InputTextForm from '../components/InputTextForm';
import NewUserForm from '../components/NewUserForm'
import PinText from '../components/PinText'
import InputErrorText from '../components/InputErrorText'
import { validateCreatenewHomeInput } from '../helpers/formInput.helper'

class CreateNewHome extends Component {
  saveNewHome = () => {
    let payload = {
      homeName: this.props.homeName,
      homePin: this.props.homePin,
      user: {
        email: this.props.email,
        username: this.props.username,
        pin: this.props.pin,
        deviceId: IMEI.getImei()
      },
      sensors: {
        gas: 1,
        garage: 1,
        door: 1
      },
      logs: {}
    }
    let validate = validateCreatenewHomeInput(payload)
    if(validate === true) {
      this.props.createNewHome(payload)
      this.props.navigation.goBack()
    } else {
      this.props.setCreateNewHomeMessage(validate)
    }
  }

  handleAppStateChange = (appState) => {
    if (appState.match(/inactive|background/)) {
      this.props.navigation.navigate('Logout')
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true}
        />
        <KeyboardAvoidingView behavior="padding" style={{flex: 2, justifyContent: 'center', marginTop: -5, marginBottom: 10}}>
          <Image style={{ marginTop: 2, width: 120, height: 120, alignSelf: 'center'}} source={require('../components/assets/casa.png')} />
          <PinText text={'Secure Your Home With Us'}/>
          <InputErrorText text={ this.props.message }/>
          <View style={{marginTop: '2%'}}>
            <InputTextForm
              name={ 'homeName' }
              placeholder={ 'home name' }
              onChangeText={ this.props.createNewHomeHandleInputChange }
              value={ this.props.homeName }
              />
            <InputTextForm
              name={ 'homePin' }
              placeholder={ 'home pin' }
              secureTextEntry={ true }
              onChangeText={ this.props.createNewHomeHandleInputChange }
              keyboardType={ 'numeric' }
              maxLength={ 6 }
              value={this.props.homePin }
              />
            <NewUserForm />
            <View style={{ marginTop: 12 }} >
              <Button style={styles.btn} title={ 'Register' } onPress={ this.saveNewHome }/>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }

  componentDidMount () {
    AppState.addEventListener('change', this.handleAppStateChange)
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34b8ed',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  btn: {
    padding: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#003b93',
    borderRightWidth: 2,
    borderRightColor: '#003b93',
  },
  end: {
    marginTop: 40,
    justifyContent: 'flex-end'
  }
})

function mapStateToProps (state) {
  return {
    email: state.addNewUserReducer.email,
    username: state.addNewUserReducer.username,
    pin: state.addNewUserReducer.pin,
    homeName: state.CreateNewHomeReducer.homeName,
    homePin: state.CreateNewHomeReducer.homePin,
    message: state.CreateNewHomeReducer.message    
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  createNewHomeHandleInputChange,
  createNewHome,
  setCreateNewHomeMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewHome)