import React from 'react'
import { View, Text, Image } from 'react-native'

import ASPlayButton from '../play-button/ASPlayButton'

import { completedTickIcon, favouriteIcon } from '../../constants/common-constants'
import { overthinkerImage } from '../../constants/dashboard-constants'

import { styles } from './asDashboardMasteryCard-styles'

const ASDashboardMasteryCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={overthinkerImage} style={styles.image} />
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.detailTopContainer}>
          <View style={styles.listenIconContainer}>
            <View style={styles.listenContainer}>
              <Text style={styles.listenText}>Listen</Text>
              <Image source={completedTickIcon} style={styles.icon} />
            </View>
            <Image source={favouriteIcon} style={styles.icon} />
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
