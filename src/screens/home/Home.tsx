import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import { ASHeader, ASLoader, ASReportCard } from '../../components'

import { useAppDispatch, useAppSelector } from '../../redux/store'
import { fetchCovidData, getCovidData } from '../../redux/reducers'
import { COLORS, Spacing } from '../../theme'
import { ICovidDataType } from '../../types'

import { LIMIT } from '../../constants'

import { styles } from './home-styles'

const Home = () => {
  const dispatch = useAppDispatch()
  const { loading, covidData } = useAppSelector(getCovidData)

  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    dispatch(fetchCovidData())
  }, [])
  const covidDataLength = covidData.length

  const startIdx = (page - 1) * LIMIT

  const endIdx = Math.min(startIdx + Number(LIMIT), covidDataLength)

  const sortedCovidData = [...covidData].sort((data1: ICovidDataType, data2: ICovidDataType) => {
    return data2.cases - data1.cases
  })

  const paginatedCovidData = [...sortedCovidData].slice(startIdx, endIdx)

  const previousHandler = () => {
    if (page === 1) return
    setPage(page - 1)
  }
  const nextHandler = () => {
    setPage(page === Math.ceil(covidDataLength / LIMIT) ? 1 : page + 1)
  }

  if (loading) return <ASLoader />

  return (
    <>
      <ASHeader title="COVID - 19" />
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.paginationContainer}>
            <View>
              <Text style={styles.title}>Live Reports</Text>
              <Text style={styles.subTitle}>Top five countries</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button]} onPress={previousHandler}>
                <Icon
                  name="arrow-left"
                  size={Spacing.space_8}
                  color={page == 1 ? COLORS.neutral[10] : COLORS.neutral[600]}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={nextHandler}>
                <Icon
                  name="arrow-right"
                  size={Spacing.space_8}
                  color={page === covidDataLength - 1 ? COLORS.neutral[10] : COLORS.neutral[600]}
                />
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={paginatedCovidData}
            renderItem={({ item }) => <ASReportCard {...item} />}
            keyExtractor={item => item.country}
          />
        </View>
      </View>
    </>
  )
}

export default Home
