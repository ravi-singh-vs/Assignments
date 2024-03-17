import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'

import { getCurrentDate } from '../../utils/common-utils'
import {
  DASHBOARD_HEADER_DATA,
  dashboardBackgroundImage,
} from '../../constants/dashboard-constants'
import { ResizeMode, calendarIcon } from '../../constants/common-constants'
import { TDashboardHeader } from '../../types/dashboard-types'
import { styles } from './asDashboardHeader-styles'

interface IASDashboardHeaderProps {
  title: string
}
const ASDashboardHeader = (props: IASDashboardHeaderProps) => {
  const { title } = props
  const imageSource = DASHBOARD_HEADER_DATA[title as TDashboardHeader]
  const currentDate = getCurrentDate()
  return (
    <ImageBackground
      source={dashboardBackgroundImage}
      style={styles.imageBackground}
      resizeMode={ResizeMode.Cover}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image source={calendarIcon} style={styles.image} />
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
