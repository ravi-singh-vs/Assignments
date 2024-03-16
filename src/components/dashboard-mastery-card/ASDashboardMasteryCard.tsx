import { View, Text, Image } from 'react-native'
import React from 'react'

import ASPlayButton from '../play-button/ASPlayButton'

import { styles } from './asDashboardMasteryCard-styles'

const ASDashboardMasteryCard = () => {
  const imageSource = require('../../assets/icons/overthinker-grey.png')
  const tick = require('../../assets/icons/complete.png')
  const marked = require('../../assets/icons/marked-favourite.png')
  const play = require('../../assets/icons/audio.png')
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.detailTopContainer}>
          <View style={styles.listenIconContainer}>
            <View style={styles.listenContainer}>
              <Text style={styles.listenText}>Listen</Text>
              <Image source={tick} style={styles.icon} />
            </View>
            <Image source={marked} style={styles.icon} />
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
