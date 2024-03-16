import React from 'react'
import { Image, Text, View } from 'react-native'
import Survivng from '../../../../assets/icons/surviving.png'
import thriving from '../../../../assets/icons/thriving.png'
import ASLoadingBar from '../../../../components/loading-bar/ASLoadingBar'

import { COLORS } from '../../../../theme/colors'
import { styles } from './asScoreCard-styles'

interface IASScoreCardProps {
  average: number
}

const ASScoreCard = ({ average }: IASScoreCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={Survivng} />
          <Text style={[styles.text, { color: COLORS.white }]}>Surviving</Text>
        </View>
        <View style={styles.scoreContainer}>
          <Text style={[styles.scoreText, { color: COLORS.white }]}>{average}/100</Text>
          <ASLoadingBar loadingLevel={50} />
        </View>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={thriving} />
          <Text style={[styles.text, , { color: COLORS.white }]}>Thriving</Text>
        </View>
      </View>

      <Text style={[styles.text, { color: COLORS.white, textAlign: 'center' }]}>
        Mental Well-being Score is Moderate.{'\n'}Keep it Up!
      </Text>
    </View>
  )
}

export default ASScoreCard
