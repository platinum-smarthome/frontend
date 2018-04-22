import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button, TouchableHighlight, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { updateLastSeen } from '../store/userData/userData.actions'
import { notificationsDelete } from '../store/notificationLogs/notificationLogs.actions'
import { dateDisplayFormater } from '../helpers/date.helper'
import NotificationCardFooter from './NotificationCard.footer'

export default class NotificationCard extends Component {
  render() {
    const { title, description, createdAt, id } = this.props.data
    return (
      <View style={styles.infoCard}>
        <View style={styles.titleBorder}>
          <Text style={styles.notifTitle}>{ title }</Text>
        </View>
        <Text style={styles.time}>{ dateDisplayFormater(createdAt) }</Text>
        { this.props.data.imageUrl &&
          <TouchableOpacity style={{alignItems: 'center'}} onPress={ this.props.press }>
            <Image style={{width: 120, height: 120}} source={{ uri: this.props.data.imageUrl }} />
          </TouchableOpacity>
        }
        <Text style={styles.descText}>{ description }</Text>
        <NotificationCardFooter
          onPress={ () => notificationsDelete(id) }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  infoCard: {
    borderWidth: 1,
    borderColor: '#34b8ed',
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
  }
})
