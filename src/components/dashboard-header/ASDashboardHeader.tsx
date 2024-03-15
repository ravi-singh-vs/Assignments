import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { styles } from './asDashboardHeader-styles'
import { getCurrentDate } from '../../utils/common-utils'

const ASDashboardHeader = () => {
  const imageSource = require('../../assets/images/hero.png')
  const calendarIcon = require('../../assets/icons/calendar.png')
  const overthinker = require('../../assets/icons/overthinker-white.png')
  const currentDate = getCurrentDate()
  return (
    <ImageBackground source={imageSource} style={styles.imageBackground} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image source={calendarIcon} style={styles.image} />
          <Text style={styles.text}>{currentDate}</Text>
        </View>
        <View style={styles.bottomSubContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Overthinker</Text>
            <Text style={styles.days}>Day 1 of 24</Text>
          </View>
          <Image source={overthinker} style={styles.heroImage} />
        </View>
      </View>
    </ImageBackground>
  )
}

export default ASDashboardHeader
