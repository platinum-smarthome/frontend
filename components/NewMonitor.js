import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';


export default class NewMonitor extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={{ alignItems: 'center'}}>
          <Text style={ styles.monitorTitle }> { this.props.text } </Text>
        </View>
        <View style={ this.props.status ? styles.good : styles.bad }>
          <Image style={styles.img} source={ this.props.status? this.props.imgGood : this.props.imgBad }/>
        </View>
        <View style={{ alignItems: 'center', paddingVertical: 6 }}>
          { 
            this.props.type === 'gas' ?
            this.props.status ?
            <Text style={styles.locked}> Normal </Text> :
            <Text style={styles.unlocked}> Warning </Text> :
            this.props.status ? 
            <Text style={styles.locked}> Closed </Text> :
            <Text style={styles.unlocked}> Open </Text> 
          }
        </View>
      </View>
    )
  }
};
const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    alignItems: 'center'
  },
  monitorTitle: {
    fontSize: 20, 
    fontWeight: '400', 
    paddingVertical: 2, 
    color: '#fff'
  },
  img: {
    width: 70,
    height: 70
  },
  good: {
    borderWidth: 1, 
    borderColor: 'rgba(255,255,255,0.3)', 
    backgroundColor: 'rgba(225, 255, 255, 0.8)', 
    borderRadius: 38, 
    width: 90, 
    height: 90, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  bad: {
    borderWidth: 1, 
    borderColor: 'rgba(255,255,255,0.3)', 
    backgroundColor: '#ff7043', 
    borderRadius: 38, 
    width: 90, 
    height: 90, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  locked: {
    color: '#0277bd',
    fontSize: 18,
    fontWeight: '100'
  },
  unlocked: {
    color: 'red',
    fontSize: 18,
    fontWeight: '100'
  }
})
