import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IMEI from 'react-native-imei';

// import { createNewHome } from '../store/createNewHome/createNewHome.actions';
import { createNewUser } from '../store/addNewUser/addNewUser.actions'
import InputTextForm from '../components/InputTextForm';
import NewUserForm from '../components/NewUserForm';

class AddNewUser extends Component {
  saveNewUser = () => {
    let payload = {
      home: this.props.home || '-LAQreC3C-kaK2jjw6vD',
      user: {
        email: this.props.email,
        username: this.props.username,
        pin: this.props.pin,
        deviceId: IMEI.getImei()
      }
    }
    this.props.createNewUser(payload)
  }

  render () {
    return (
      <View style={styles.container}>
        <NewUserForm />
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
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  createNewUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddNewUser)