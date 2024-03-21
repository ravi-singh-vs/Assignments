import React from 'react'
import { View, Text } from 'react-native'
import { Circle } from 'react-native-progress'
import Icon from 'react-native-vector-icons/Feather'

import { getProgressChartColor } from '../../utils'
import { ICovidDataType as IASTopCountryCard } from '../../types'
import { COLORS, Spacing } from '../../theme'

import { ACTIVE_CASES_PERCENTAGE_THRESHOLD } from '../../constants'

import { styles } from './asTopCountryCard-styles'

const ASTopCountryCard = (props: IASTopCountryCard) => {
  const { country, cases, recovered,  population } = props

  const percentage = (cases / population) * 100

  return (
    <View style={styles.container}>
      <Circle
        size={Spacing.space_80}
        progress={Math.floor(percentage) / 100}
        unfilledColor={COLORS.neutral[10]}
        thickness={Spacing.space_8}
        strokeCap="round"
        borderColor={COLORS.white}
        color={getProgressChartColor(percentage)}
        showsText={true}
        formatText={() => `${Math.floor(percentage)}%`}
        textStyle={styles.progressChart}
      />
      <View style={styles.subContainer}>
        <View style={styles.detailContainer}>
          <Text style={styles.countryTitle}>{country}</Text>
          <Text style={styles.stats}>Affected - {cases}</Text>
          <Text style={styles.stats}>Recovered - {recovered}</Text>
        </View>
        <Icon
          name="bell"
          size={Spacing.space_24}
          color={
            Math.floor(percentage) > ACTIVE_CASES_PERCENTAGE_THRESHOLD
              ? COLORS.primary[50]
              : COLORS.success[50]
          }
        />
      </View>
    </View>
  )
}

export default ASTopCountryCard
