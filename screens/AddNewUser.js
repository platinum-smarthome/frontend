import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createNewUser, createNewUserHandleInputChange } from '../store/addNewUser/addNewUser.actions'
import InputTextForm from '../components/InputTextForm';
import NewUserForm from '../components/NewUserForm';

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
        <NewUserForm />
        <InputTextForm
          name={ 'deviceId' }
          placeholder={ 'User Device Id' }
          onChangeText={ this.props.createNewUserHandleInputChange }
          value={ this.props.deviceId }
        />
        <Button title={ 'Add New User' } onPress={ this.saveNewUser }/>
      </View>
    )
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