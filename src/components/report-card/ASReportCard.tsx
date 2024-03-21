import React from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import { COLORS } from '../../theme'
import { ICovidDataType as IASReportCardProps } from '../../types'

import { CASES_THRESHOLD } from '../../constants'

import { styles } from './asReportCard-styles'

const ASReportCard = (props: IASReportCardProps) => {
  const { country, countryInfo, cases } = props

  return (
    <View style={styles.container}>
      <View style={styles.countryInfoContainer}>
        <Image source={{ uri: countryInfo.flag }} style={styles.countryFlagImage} />
        <Text style={styles.countryTitle}>{country}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.stats}>{cases}</Text>
        <Icon
          name={cases < CASES_THRESHOLD ? 'arrow-down' : 'arrow-up'}
          color={cases < CASES_THRESHOLD ? COLORS.success[50] : COLORS.primary[50]}
          size={16}
        />
      </View>
    </View>
  )
}

export default ASReportCard
