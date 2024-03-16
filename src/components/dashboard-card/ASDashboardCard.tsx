import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './asDashboardCard-styles'

interface IASDashboardCardProps {
  data: {
    id: number
    title: string
    startingTime: string
    endingTime: string
  }
}
const ASDashboardCard = ({ data }: IASDashboardCardProps) => {
  const { id, title, startingTime, endingTime } = data
  const PLAY_BUTTON = require('../../assets/icons/audio.png')
  const COMPLETED_TICK = require('../../assets/icons/complete.png')
  const BOOKMARK = require('../../assets/icons/marked-favourite.png')
  const REMOVE_BOOKMARK = require('../../assets/icons/not-marked-favourite.png')
  const REMINDER = require('../../assets/icons/reminder.png')
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <Image source={REMINDER} style={styles.image} />
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.headerSubContainer}>
              <View style={styles.headerSubContainerTitle}>
                <Text style={styles.challengeText}>Challenge {id}</Text>
                <Image source={COMPLETED_TICK} style={styles.headerSubContainerTitleImage} />
              </View>
              <Image source={REMOVE_BOOKMARK} style={styles.headerSubContainerImage} />
            </View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.duration}>
              {startingTime} to {endingTime}
            </Text>
            <View style={styles.bottomSubContainer}>
              <Image source={PLAY_BUTTON} style={styles.bottomSubContainerImage} />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ASDashboardCard
