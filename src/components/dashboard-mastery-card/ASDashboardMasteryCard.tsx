import { View, Text, Image } from 'react-native'
import React from 'react'

import ASPlayButton from '../play-button/ASPlayButton'

import { bookmarkedIcon, completedTickIcon } from '../../constants/common-constants'
import { masterImageIcon } from '../../constants/dashboard-constants'
import { styles } from './asDashboardMasteryCard-styles'

const ASDashboardMasteryCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={masterImageIcon} style={styles.image} />
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.detailTopContainer}>
          <View style={styles.listenIconContainer}>
            <View style={styles.listenContainer}>
              <Text style={styles.listenText}>Listen</Text>
              <Image source={completedTickIcon} style={styles.icon} />
            </View>
            <Image source={bookmarkedIcon} style={styles.icon} />
          </View>
          <Text style={styles.title}>Mastery of the Day</Text>
        </View>
        <View style={styles.detailBottomContainer}>
          <Text style={styles.time}>6am to 9pm</Text>
          <ASPlayButton />
        </View>
      </View>
    </View>
  )
}

export default ASDashboardMasteryCard
