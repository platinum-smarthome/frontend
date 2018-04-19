import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createNewUserHandleInputChange  } from '../store/addNewUser/addNewUser.actions';
import InputTextForm from './InputTextForm';

class NewUserForm extends Component {

  render () {
    return (
      <View>
        <InputTextForm
          name={ 'username' }
          value={this.props.username }
          onChangeText={ this.props.createNewUserHandleInputChange }
        />
        <InputTextForm
          name={ 'email' }
          value={this.props.email }
          keyboardType={ 'email-address' }
          onChangeText={ this.props.createNewUserHandleInputChange }
        />
        <InputTextForm
          name={ 'pin' }
          value={this.props.pin }
          secureTextEntry={ true }
          onChangeText={ this.props.createNewUserHandleInputChange }
          keyboardType={ 'numeric' }
          maxLength={ 6 }
        />
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    email: state.addNewUserReducer.email,
    username: state.addNewUserReducer.username,
    pin: state.addNewUserReducer.pin
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  createNewUserHandleInputChange
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm)