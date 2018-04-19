import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IMEI from 'react-native-imei';

import { createNewHomeHandleInputChange, createNewHome } from '../store/createNewHome/createNewHome.actions'
import InputTextForm from '../components/InputTextForm';
import NewUserForm from '../components/NewUserForm'

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
      }
    }
    // console.log(payload)
    this.props.createNewHome(payload)
  }

  render () {
    return (
      <View style={styles.container}>
        <InputTextForm
          name={ 'homeName' }
          placeholder={ 'Home Name' }
          onChangeText={ this.props.createNewHomeHandleInputChange }
          value={ this.props.homeName }
        />
        <InputTextForm
          name={ 'homePin' }
          placeholder={ 'Home Pin' }
          secureTextEntry={ true }
          onChangeText={ this.props.createNewHomeHandleInputChange }
          keyboardType={ 'numeric' }
          maxLength={ 6 }
          value={this.props.homePin }
        />
        <NewUserForm />
        <Button title={ 'create' } onPress={ this.saveNewHome }/>
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
    homeName: state.CreateNewHomeReducer.homeName,
    homePin: state.CreateNewHomeReducer.homePin
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  createNewHomeHandleInputChange,
  createNewHome
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewHome)