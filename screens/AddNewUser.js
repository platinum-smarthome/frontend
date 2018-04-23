import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, Image, AppState, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createNewUser, createNewUserHandleInputChange } from '../store/addNewUser/addNewUser.actions'
import InputTextForm from '../components/InputTextForm';
import NewUserForm from '../components/NewUserForm';
import PinText from '../components/PinText'
import InputErrorText from '../components/InputErrorText'

class AddNewUser extends Component {
  saveNewUser = () => {
    let payload = {
      user: {
        email: this.props.email,
        username: this.props.username,
        pin: this.props.pin,
        deviceId: this.props.deviceId
      }
    }
    this.props.createNewUser(payload)
  }

  handleAppStateChange = (appState) => {
    if (appState.match(/inactive|background/)) {
      this.props.navigation.navigate('Logout')
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={{flex: 2, justifyContent: 'center', marginTop: -5, marginBottom: 10}}>
          <Image style={{ marginVertical: 10, height: 40, width: 170, alignSelf: 'center'}} source={require('../components/assets/fortress_logo.png')} />
          <Image style={{ marginTop: 20, width: 120, height: 120, alignSelf: 'center'}} source={require('../components/assets/usuario.png')} />
          <PinText text={'Add a New House Member'}/>
          <InputErrorText text={ this.props.message }/>
          <View style={{marginTop: '5%'}}>
            <NewUserForm />
            <InputTextForm
              name={ 'deviceId' }
              placeholder={ 'user device id' }
              onChangeText={ this.props.createNewUserHandleInputChange }
              value={ this.props.deviceId }
            />
            <View style={{ marginTop: 36 }} >
              <Button style={styles.btn} title={ 'Add New User' } onPress={ this.saveNewUser }/>
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
    deviceId: state.addNewUserReducer.deviceId,
    message: state.addNewUserReducer.message,    
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  createNewUser,
  createNewUserHandleInputChange
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddNewUser)