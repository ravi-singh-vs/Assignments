import React from 'react'
import { Image, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { COLORS } from '../../theme/colors'
import { palette } from '../../theme/palette'

import { ScoreCardIcons } from '../../constants/activity-constants'

import { styles } from './asScoreCard-styles'

interface IASScoreCardProps {
  average: number
}

const ASScoreCard = (props: IASScoreCardProps) => {
  const { average } = props
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={ScoreCardIcons['Surviving']} />
          <Text style={[styles.text, { color: COLORS.white }]}>Surviving</Text>
        </View>
        <View style={styles.scoreContainer}>
          <Text style={[styles.score, { color: COLORS.white }]}>{average}/100</Text>
          <View style={styles.outerContainer}>
            <View style={{ width: `${average}%` }}>
              <LinearGradient
                colors={palette.progressBarGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.innerContainer}
              />
            </View>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={ScoreCardIcons['Thriving']} />
          <Text style={[styles.text, styles.scoreText]}>Thriving</Text>
        </View>
      </View>

      <Text style={[styles.text, styles.scoreText]}>
        Mental Well-being Score is Moderate.{'\n'}Keep it Up!
      </Text>
    </View>
  )
}

export default ASScoreCard
