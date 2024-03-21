import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'

import { WorldMap } from '../../assets'

import { ASHeader, ASLoader, ASTopCountryCard } from '../../components'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { fetchCovidData, getCovidData } from '../../redux/reducers'
import { Spacing } from '../../theme'
import { ICovidDataType } from '../../types'

import { styles } from './map-styles'

const Map = () => {
  const dispatch = useAppDispatch()
  const { loading, covidData } = useAppSelector(getCovidData)

  useEffect(() => {
    dispatch(fetchCovidData())
  }, [])

  const sortedCovidData = [...covidData].sort((data1, data2) => {
    const percentage1 = (data1.active / data1.cases) * 100
    const percentage2 = (data2.active / data2.cases) * 100
    return percentage2 - percentage1
  })

  if (loading) return <ASLoader />

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
          {sortedCovidData.map((data: ICovidDataType) => (
            <ASTopCountryCard {...data} key={data.country} />
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default Map
