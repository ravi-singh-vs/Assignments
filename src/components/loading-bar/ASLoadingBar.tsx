import React from 'react'
import { View } from 'react-native'

import { styles } from './asLoadingBar-styles'

interface IASLoadingProps {
  loadingLevel: string
}

const ASLoadingBar = ({ loadingLevel }: IASLoadingProps) => {
  return (
    <View style={styles.outerContainer}>
      <View style={[styles.innerContainer, { width: `${loadingLevel}%` }]}></View>
    </View>
  )
}

export default ASLoadingBar
