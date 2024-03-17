import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import ASScoreCard from './score-card/ASScoreCard'
import ASTopWreckers from './top-wreckers/ASTopWreckers'

import { URL } from '.././../../constants/api-constants'

import { styles } from './assessment-styles'

interface Wrecker {
  id: string
  title: string
  progress: string
  description: string
}

const Assessment = () => {
  const [top3Wreckers, setTop3Wreckers] = useState<Wrecker[]>([])
  const [averageProgress, setAverageProgress] = useState<number>(0)

  const getTop3Wreckers = (data: Wrecker[]) => {
    const sortedWreckers = data.sort((a, b) => parseInt(b.progress) - parseInt(a.progress))
    const top3Wreckers = sortedWreckers.slice(0, 3)
    setTop3Wreckers(top3Wreckers)
  }

  const getAverageProgressValue = (data: Wrecker[]) => {
    if (data.length === 0) return 0
    const totalProgress = data.reduce((acc, data) => acc + Number(data.progress), 0)
    const average = totalProgress / data.length
    setAverageProgress(Math.floor(average))
  }

  const fetchWreckers = async () => {
    try {
      const response = await fetch(`${URL}/getWreckers`)
      const data = await response.json()
      getTop3Wreckers(data)
      getAverageProgressValue(data)
    } catch (error) {
      console.warn(error, 'Occurred!')
    }
  }

  useEffect(() => {
    fetchWreckers()
  }, [])

  return (
    <View style={styles.container}>
      <ASScoreCard average={averageProgress} />
      <ASTopWreckers wreckers={top3Wreckers} />
    </View>
  )
}

export default Assessment
