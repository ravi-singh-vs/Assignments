import React from 'react'
import { Image, ImageSourcePropType, Text, TouchableOpacity } from 'react-native'

import { styles } from './asProfileNavigtaion-styles'

interface IProfileNavigationProps {
  title: string
  arrowRight: ImageSourcePropType
  setShowWebView: (value: boolean) => void
}

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
