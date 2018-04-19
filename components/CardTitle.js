import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

class CardTitle extends Component {
  render() {
    return (
      <View style={styles.cardTop}>
        <View style={styles.cardLogo}>
          <Image style={styles.img} source={ this.props.imgLogo } />
        </View>
        <View>
          <Text style={styles.cardText}> { this.props.text } </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardTop: {
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    flexDirection: 'row',
    alignContent: 'flex-start'
  },
  cardLogo: {
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  img: {
    width: 25,
    height: 25,
  },
  cardText: {
    justifyContent: 'center',
    color: '#606060',
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: 10
  }
})

export default CardTitle