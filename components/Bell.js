import React, { Component } from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

class Bell extends Component {
  newNotificationCounter = () => {
    let logs = this.props.logs
    let lastSeen = this.props.userlastSeen
    let newNotifCount = 0
    for(let i = 0; i<logs.length; i++) {
      if(logs[i].createdAt > lastSeen) {
        newNotifCount += 1
      } else {
        i = logs.length
      }
    }
    return newNotifCount
  }

  render() {
    // this.props.press()
    return (
      <View style={styles.pad}>
        <Image style={styles.img} source={require('../components/assets/alarma.png')}/>
        {
          this.props.logs.length &&
            <View style={styles.circle}>
              <Text style={styles.num}>{ this.newNotificationCounter() }</Text>
            </View>
        }
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    logs: state.NotificationLogs.logs,
    userlastSeen: state.UserData.lastSeen
  }
}

function mapDispatchToProps (dispatch) {
  return {
    // getData: () => dispatch(getData()),
    // fetchHomeData: () => dispatch(fetchHomeData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bell)

const styles = StyleSheet.create({
  img: {
    width: 28,
    height: 28,
  },
  pad: {
    paddingHorizontal: 16,
  },
  circle: {
    position: 'absolute',
    left: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  num: {
    color: '#fff',
    fontSize: 12,
  }
})
