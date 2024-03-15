import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './asPlayButton-styles'

const ASPlayButton = () => {
  const PLAY_BUTTON = require('../../assets/icons/audio.png')
  return (
    <View style={styles.container}>
      <Image source={PLAY_BUTTON} style={styles.image} />
    </View>
  )
}

export default ASPlayButton
