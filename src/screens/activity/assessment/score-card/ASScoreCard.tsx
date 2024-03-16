import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import ASLoadingBar from '../../../../components/loading-bar/ASLoadingBar'
import Survivng from '../../../../assets/icons/surviving.png'
import thriving from '../../../../assets/icons/thriving.png'
import { Typography } from '../../../../theme/typography'

interface IASScoreCardProps{
  average:number
}

const ASScoreCard = ({average}:IASScoreCardProps) => {
  return (
    <View style={styles.container}>

      <View style={styles.subContainer}>
        <View style={styles.scoreContainer}>
          <Image style={styles.icon} source={Survivng} />
          <Text style={[styles.colorWhite, styles.text]}>Surviving</Text>
        </View >
        <View style={{ alignItems: 'center', justifyContent: 'space-between'}}>
          <Text style={[styles.colorWhite, styles.score]}>{average}/100</Text>
          <ASLoadingBar loadingLevel={50} />
        </View>
        <View style={styles.scoreContainer}>
          <Image style={styles.icon} source={thriving} />
          <Text style={[styles.colorWhite, styles.text]}>Thriving</Text>
        </View>
      </View>

      <Text style={[styles.text,styles.colorWhite,{textAlign:'center'}]}>
        Mental Well-being Score is Moderate.{'\n'}Keep it Up!
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    gap: 8,
    marginHorizontal: 28,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
  },
  scoreContainer: {
    alignItems: 'center',
  },
  colorWhite: {
    color: 'white',
  },
  icon: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: Typography.secondary['bold'],
    paddingVertical: 5,
  },
  score: {
    fontSize: 32,
    lineHeight: 45,
    fontFamily: Typography.primary['bold'],
    marginBottom:5
  },
  message:{

  }
})

export default ASScoreCard
