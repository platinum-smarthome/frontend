import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Animated, Easing } from 'react-native'
import MarqueeLabelVertical from 'react-native-lahk-marquee-label-vertical'

export default class About extends Component {
  constructor () {
    super()
    this.spinValue = new Animated.Value(0)
  }

  componentDidMount () {
    this.spin()
  }
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }


  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
    <ScrollView>
      <View style={styles.body}>
        <View style={{alignItems: 'center', marginTop: 16}}>
          <Text style={styles.shadow}> The Team </Text>
        </View>
        {/* Andrew */}
        <View style={styles.border}>
          <View style={styles.imgPad}>
            <Image style={styles.imgRad} 
              source={require('../components/assets/about/andrewbudikusuma.png')}
              />
          </View>
          <View style={styles.textPad}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>Andrew Budi Kusuma</Text>
              <Text style={{
                position: 'absolute',
                right: 8,
                top: 26,
                fontSize: 14,
                color: '#fff',
                fontFamily: 'sans-serif-thin'
              }} selectable>andrew.budikusuma@gmail.com</Text>
            </View>
            <Text style={{    
              color: 'rgba(0, 0, 0, 0.4)',
              fontSize: 18,
              fontFamily: 'sans-serif-light',
              paddingTop: 6}}
            >Back End Developer
            </Text>
            <Text>
              <Text style={styles.major}>Information System</Text>
              <Text style={styles.summary}> based young professional with previous experience in IT startup.</Text>
            </Text>
            <Text style={styles.description}>
              In the project, Andrew made the major contribution on the implementation and bridging communication between NodeJS and Raspberry Pi.
              Andrew also implemented an SMS notification system on server side with the use of Nexmo.
            </Text>
          </View>
        </View>

         {/* Eko */}
         <View style={styles.border}>
          <View style={styles.imgPad}>
            <Image style={styles.imgRad} 
              source={require('../components/assets/about/ekosantoso.png')}
              />
          </View>
          <View style={styles.textPad}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>Eko Santoso</Text>
              <Text style={styles.email} selectable>eksant@gmail.com</Text>
            </View>
            <Text style={styles.projectTitle}>Back End Developer</Text>
            <Text>
              <Text style={styles.major}>Electrical Engineer</Text>
              <Text style={styles.summary}> professional with experience in IT consulting firm and as a Software Developer.</Text>
            </Text>
            <Text style={styles.description}>
              In the project, Eko took lead as the team captain. 
              Using the Johnny Five library, Eko engineered on bridging communication between sensor components and NodeJs through Raspi IO (Raspberry Pi).
              Other tech stack that Eko implemented includes the use of Cloudinary and RaspiCam.
            </Text>
          </View>
        </View>

        {/* Ervan */}
        <View style={styles.border}>
          <View style={styles.imgPad}>
            <Image style={styles.imgRad} 
              source={require('../components/assets/about/ervanadetya.jpg')}
              />
          </View>
          <View style={styles.textPad}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>Ervan Adetya</Text>
              <Text style={styles.email} selectable>ervan.adetya@gmail.com</Text>
            </View>
            <Text style={styles.projectTitle}>Full Stack Developer</Text>
            <Text>
              <Text style={styles.major}>Computer Engineer</Text>
              <Text style={styles.summary}>, Entrepreneur and tech enthuasiast.</Text>
            </Text>
            <Text style={styles.description}>
              In the project Ervan arranged and organized the Firebase database structure and its
              Redux state management in React Native. 
              Ervan also managed to implement several crucial background-running features in Raspberry Pi.
            </Text>
          </View>
        </View>
       
        {/* Herby */}
        <View style={styles.border}>
          <View style={styles.imgPad}>
            <Image style={styles.imgRad} 
              source={require('../components/assets/about/herbyherado.jpg')}
              />
          </View>
          <View style={styles.textPad}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>Herby Herado</Text>
              <Text style={styles.email} selectable>herby.herado@gmail.com</Text>
            </View>
            <Text style={styles.projectTitle}>Front End Developer</Text>
            <Text>
              <Text style={styles.major}>Chemical Engineer</Text>
              <Text style={styles.summary}> based young professional turned developer.</Text>
            </Text>
            <Text style={styles.description}>
              In the project Herby serves as the lead UI/UX, 
              making use of React Native framework, Redux state management, 
              third party libraries and Firebase to store and sync data realtime.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#34b8ed'
  },
  shadow: {
    fontSize: 36, 
    color: '#fff', 
    fontWeight: '100', 
    fontFamily: 'sans-serif-thin',
    textShadowOffset: {width: 3, height: 1},
    textShadowRadius: 10
  },
  border: {
    flexDirection: 'row',
    borderBottomColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 1,
    paddingVertical: 8
  },
  imgPad: {
    width: 80,
    height: 80,
    paddingHorizontal: 6 
  },
  imgRad: {
    width: 80,
    height: 80,
    borderRadius: 50
  },
  textPad: {
    flexDirection: 'column',
    width: '80%',
    paddingLeft: 12
  },
  name: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'sans-serif-light'
  },
  email: {
    position: 'absolute',
    right: 8,
    top: 8,
    fontSize: 14,
    color: '#fff',
    fontFamily: 'sans-serif-thin'
  },
  projectTitle: {
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 18,
    fontFamily: 'sans-serif-light'
  },
  major: {
    color: 'rgba(255,255,255,0.8)',
    fontFamily: 'sans-serif-medium',
    fontSize: 18
  },
  summary: {
    color: 'rgba(255,255,255,0.8)',
    fontFamily: 'sans-serif-light',
    fontSize: 16
  },
  description: {
    fontFamily: 'sans-serif-light',
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)'
  }
})