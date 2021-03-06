import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native'
import { dateDisplayFormater } from '../helpers/date.helper'

export default class FullView extends Component {
  render() {
    let data = this.props.navigation.state.params.description
    return (
      <View style={{flex: 1, height: '100%', alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'rgba(52, 184, 237, 0.4)'}}>
        <StatusBar
          hidden={true}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={{ fontSize: 26, fontWeight: '100', color: '#fff', paddingHorizontal: 18 }}> Is this you? </Text>
          <Image style={{marginTop: 4, width: 30, height: 30}} source={require('../components/assets/policia.png')} />
        </View>
        <View style={styles.shadow}>
        <Image 
          style={{ width: 300, height: 250 }} 
          source={{uri: data.imageUrl }}
          resizeMode="contain"
        />
        </View>
        <Text style={{ marginTop: 4, fontSize: 22, fontWeight: '200', color: 'rgba(255,255,255,0.9)' }}> Image captured at </Text>
        <Text style={{ fontSize: 16, fontWeight: '100', color: '#fff' }}> { dateDisplayFormater(data.createdAt) } </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  shadow: {
    borderWidth: 3,
    borderRadius: 4,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }
})
