import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { updateLastSeen } from '../store/userData/userData.actions'
import NotificationCard from '../components/NotificationCard'


class Notify extends Component {
  
  renderItem = ({ item }) => {
    return <NotificationCard
      data={ item }
      press={ () => this.props.navigation.navigate('FullView', { description: item }) }
    />
  }
  
  keyExtractor = (item, index) => `notif-${item.createdAt}`
  
  render() {
    console.log(this.props.logs)
    return (
      <View style={styles.body}>
        <FlatList
          data={ this.props.logs }
          keyExtractor={ this.keyExtractor }
          renderItem={ this.renderItem }
        />
      </View>
    )
  }
  componentDidMount() {
    updateLastSeen(this.props.userData.deviceId)
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#d3d3d3'
  },
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

function mapStateToProps (state) {
  return {
    userData: state.UserData,
    logs: state.NotificationLogs.logs
  }
}

// function mapDispatchToProps (dispatch) {
//   return {
//     getSensorStatus: () => dispatch(getSensorStatus())
//   }
// }

export default connect(mapStateToProps, null)(Notify)
