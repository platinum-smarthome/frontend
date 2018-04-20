import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { updateLastSeen } from '../store/userData/userData.actions'
import { dateDisplayFormater } from '../helpers/date.helpers'

export default class NotificationCard extends Component {
  render() {
    const { title, description, createdAt } = this.props.data
    return (
      <View style={styles.infoCard}>
        <View style={styles.titleBorder}>
          <Text style={styles.notifTitle}>{ title }</Text>
        </View>
        <Text style={styles.time}>{ dateDisplayFormater(createdAt) }</Text>
        <Text style={styles.descText}>{ description }</Text>
        <View style={styles.footerBorder}>
          <TouchableHighlight style={styles.box} >
            <Text style={styles.footerText}> DISMISS </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  infoCard: {
    borderWidth: 1,
    borderColor: '#00a819',
    marginTop: 1,
    marginHorizontal: 2,
    marginBottom: 2,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
  },
  notifTitle: {
    fontSize: 22,
    fontWeight: '300',
    color: '#006ac6',
    textAlign: 'center',
    paddingBottom: 3,
  },
  titleBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  time: {
    fontSize: 14,
    fontWeight: '300',
    color: '#333333',
    paddingVertical: 8
  },
  descText: {
    fontSize: 18,
    fontWeight: '200',
    color: '#333333'
  },
  footerBorder: {
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#d3d3d3',
    paddingTop: 10,
    paddingBottom: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: {
    color: '#fff',
    padding: 8,
  },
  box: {
    backgroundColor: 'red',
    borderRadius: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderRightColor: '#a80000',
    borderBottomColor: '#a80000'
  }
})
