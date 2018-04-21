import React, { Component } from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createNewUser, createNewUserHandleInputChange } from '../store/addNewUser/addNewUser.actions'
import InputTextForm from '../components/InputTextForm';
import NewUserForm from '../components/NewUserForm';
import PinText from '../components/PinText'

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

  render () {
    return (
      <View style={styles.container}>
        <Image style={{ marginTop: 20, width: 120, height: 120}} source={require('../components/assets/usuario.png')} />
        <PinText text={'Add a New House Member'}/>
        <View style={{marginTop: 80}}>
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34b8ed',
    alignItems: 'center',
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
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  createNewUser,
  createNewUserHandleInputChange
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddNewUser)