import React, { useEffect, useState } from 'react'
import { StatusBar, View } from 'react-native'

import ASScoreCard from '../../../components/score-card/ASScoreCard'
import ASTopWreckers from '../../../components/top-wreckers/ASTopWreckers'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { fetchProgressData, getProgressData } from '../../../redux/slices/progress-slice'
import { IWreckerDataType } from '../../../types/activity-types'

import { styles } from './assessment-styles'

const Assessment = () => {
  const [top3Wreckers, setTop3Wreckers] = useState<IWreckerDataType[]>([])
  const [averageProgress, setAverageProgress] = useState<number>(0)

  const dispatch = useAppDispatch()

  const { progressData } = useAppSelector(getProgressData)

  const getTop3Wreckers = (data: IWreckerDataType[]) => {
    const sortedWreckers = [...data].sort((a, b) => parseInt(b.progress) - parseInt(a.progress))
    const top3Wreckers = sortedWreckers.slice(0, 3)
    return top3Wreckers
  }

  const getAverageProgressValue = (data: IWreckerDataType[]) => {
    if (data.length === 0) return 0
    const totalProgress = data.reduce((acc, data) => acc + Number(data.progress), 0)
    const average = totalProgress / data.length
    return Math.floor(average)
  }

  useEffect(() => {
    const averageProgessvalue = getAverageProgressValue(progressData)
    setAverageProgress(averageProgessvalue)
    const top3WreckersData = getTop3Wreckers(progressData)
    setTop3Wreckers(top3WreckersData)
  }, [progressData.length])

  useEffect(() => {
    dispatch(fetchProgressData())
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <ASScoreCard average={averageProgress} />
      <ASTopWreckers wreckers={top3Wreckers} />
    </View>
  )
}

export default Assessment
