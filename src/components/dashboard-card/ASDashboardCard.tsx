import { View, Text, Image } from 'react-native'
import React from 'react'

import { DASHBOARD_LIST_DATA } from '../../constants/dashboard-constants'
import ASPlayButton from '../play-button/ASPlayButton'
import { IDashboardData } from '../../types/dashboard-types'
import { styles } from './asDashboardCard-styles'

const PLAY_BUTTON = require('../../assets/icons/audio.png')
const COMPLETED_TICK = require('../../assets/icons/complete.png')
const BOOKMARK = require('../../assets/icons/marked-favourite.png')
const REMOVE_BOOKMARK = require('../../assets/icons/not-marked-favourite.png')

interface IASDashboardCardProps {
  data: IDashboardData
}

const ASDashboardCard = ({ data }: IASDashboardCardProps) => {
  const { id, title, startingTime, endingTime } = data

  const imageSrc = DASHBOARD_LIST_DATA[title as keyof typeof DASHBOARD_LIST_DATA].image
  const backgroundColor =
    DASHBOARD_LIST_DATA[title as keyof typeof DASHBOARD_LIST_DATA].backgroundColor
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <Image source={imageSrc} style={styles.image} />
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.headerSubContainer}>
              <View style={styles.headerSubContainerLeft}>
                <Text style={styles.challengeText}>Challenge {id}</Text>
                <Image source={COMPLETED_TICK} style={styles.tickIcon} />
              </View>
              <Image source={REMOVE_BOOKMARK} style={styles.bookmarkIcon} />
            </View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.duration}>
              {startingTime} to {endingTime}
            </Text>
            <ASPlayButton />
          </View>
        </View>
      </View>
    </View>
  )
}

export default ASDashboardCard
