import { View, Text, Image } from 'react-native'
import React from 'react'

import ASPlayButton from '../play-button/ASPlayButton'

import { DASHBOARD_LIST_DATA } from '../../constants/dashboard-constants'
import { IDashboardData, TDashboardCardTitle } from '../../types/dashboard-types'
import { completedTickIcon, notBookmarkedIcon } from '../../constants/common-constants'
import { styles } from './asDashboardCard-styles'

interface IASDashboardCardProps {
  data: IDashboardData
}

const ASDashboardCard = ({ data }: IASDashboardCardProps) => {
  const { id, title, startingTime, endingTime } = data

  let titleIndex: TDashboardCardTitle = title as TDashboardCardTitle
  const imageSrc = DASHBOARD_LIST_DATA[titleIndex].image
  const backgroundColor = DASHBOARD_LIST_DATA[titleIndex].backgroundColor
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
                <Image source={completedTickIcon} style={styles.tickIcon} />
              </View>
              <Image source={notBookmarkedIcon} style={styles.bookmarkIcon} />
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
