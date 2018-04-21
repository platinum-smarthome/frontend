import React, { Component } from 'react';
import { View, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IMEI from 'react-native-imei';

import { createNewHomeHandleInputChange, createNewHome } from '../store/createNewHome/createNewHome.actions'
import InputTextForm from '../components/InputTextForm';
import NewUserForm from '../components/NewUserForm'
import PinText from '../components/PinText'

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
    this.props.createNewHome(payload)
  }

  render () {
    return (
      // <ScrollView>
        <View style={styles.container}>
          <Image style={{ marginTop: 20, width: 120, height: 120}} source={require('../components/assets/casa.png')} />
          <PinText text={'Secure Your Home With Us'}/>
          <View style={{marginTop: 30}}>
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
            <View style={{ marginTop: 36 }} >
              <Button style={styles.btn} title={ 'Register' } onPress={ this.saveNewHome }/>
            </View>
          </View>
        </View>
      // </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34b8ed',
    alignItems: 'center'
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
    homePin: state.CreateNewHomeReducer.homePin
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  createNewHomeHandleInputChange,
  createNewHome
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewHome)