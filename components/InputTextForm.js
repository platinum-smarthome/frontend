import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

class InputTextForm extends React.Component {
  handleChange = (value) => {
    let payload = {
      name:this.props.name,
      value: value
    }
    this.props.onChangeText(payload)
  }

  render() {
    return (
      <TextInput
        secureTextEntry={ this.props.secureTextEntry || false }
        style={ styles.TextInput }
        placeholder={ this.props.placeholder || this.props.name }
        onChangeText={ this.handleChange }
        maxLength={ this.props.maxLength }
        keyboardType={ this.props.keyboardType || 'default' }
        value={ this.props.value }
      />
    );
  }
}

export default InputTextForm;

const styles = StyleSheet.create({
  TextInput: {
    height: 40,
    width: 300
  }
});