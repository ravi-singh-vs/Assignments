import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { WorldMap } from '../../assets'

import { ASHeader, ASTopCountryCard } from '../../components'
import { useAppSelector } from '../../redux/store'
import { getCovidData } from '../../redux/reducers'
import { Spacing } from '../../theme'
import { ICovidDataType } from '../../types'

import { styles } from './map-styles'

const Map = () => {
  const { covidData } = useAppSelector(getCovidData)

  const sortedCovidData = [...covidData].sort((data1, data2) => {
    const percentage1 = (data1.active / data1.cases) * 100
    const percentage2 = (data2.active / data2.cases) * 100
    return percentage2 - percentage1
  })

  return (
    <>
      <ASHeader title="World Wide map" />
      <ScrollView style={styles.container}>
        <View style={styles.affectedAreasContainer}>
          <Text style={styles.text}>Covid Affected Areas</Text>
          <View style={styles.subContainer}>
            <View style={styles.indicatorContainer}>
              <View style={styles.mostAffectedIndicator} />
              <Text style={styles.affectedLabel}>Most Affected</Text>
            </View>
            <View style={styles.indicatorContainer}>
              <View style={styles.leastAffectedIndicator} />
              <Text style={styles.affectedLabel}>Least Affected</Text>
            </View>
          </View>
          <View style={styles.mapImage}>
            <WorldMap height={Spacing.space_325} width={Spacing.space_325} />
          </View>
        </View>
        <View style={styles.topCountriesContainer}>
          <Text style={styles.title}>Top Countries</Text>
          {sortedCovidData.slice(0, 3).map((data: ICovidDataType) => (
            <ASTopCountryCard {...data} key={data.country} />
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default Map
