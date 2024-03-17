import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'

import { IProfileNavigationProps } from '../../../types/profile-types'

import { styles } from './asProfileNavigtaion-styles'

const ASProfileNavigation = ({ title, arrowRight, setShowWebView }: IProfileNavigationProps) => {
  const handleOnPress = () => {
    setShowWebView(true)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <Text style={styles.text}>{title}</Text>
      <Image style={styles.icon} source={arrowRight} />
    </TouchableOpacity>
  )
}

export default ASProfileNavigation
