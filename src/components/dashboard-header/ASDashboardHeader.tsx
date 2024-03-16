import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'

import { getCurrentDate } from '../../utils/common-utils'
import { DASHBOARD_HEADER_DATA } from '../../constants/dashboard-constants'
import { styles } from './asDashboardHeader-styles'

const HERO = require('../../assets/images/hero.png')
const CALENDAR_ICON = require('../../assets/icons/calendar.png')

interface IASDashboardHeaderProps {
  title: string
}
const ASDashboardHeader = (props: IASDashboardHeaderProps) => {
  const { title } = props
  const imageSource = DASHBOARD_HEADER_DATA[title as keyof typeof DASHBOARD_HEADER_DATA]
  const currentDate = getCurrentDate()
  return (
    <ImageBackground source={HERO} style={styles.imageBackground} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image source={CALENDAR_ICON} style={styles.image} />
          <Text style={styles.text}>{currentDate}</Text>
        </View>
        <View style={styles.bottomSubContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.days}>Day 1 of 24</Text>
          </View>
          <Image source={imageSource} style={styles.heroImage} />
        </View>
      </View>
    </ImageBackground>
  )
}

export default ASDashboardHeader
