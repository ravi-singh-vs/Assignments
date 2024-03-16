import React from 'react'
import { Alert, Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native'

import { styles } from './asProfileNavigtaion-styles'

interface IProfileNavigationProps {
  title: string
  arrowRight: ImageSourcePropType
}

const ASProfileNavigation = ({ title, arrowRight }: IProfileNavigationProps) => {
  const handleOnPress = () => {
    Alert.alert('onPress:-use WebView')
  }

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={handleOnPress}>
        <Text style={styles.text}>{title}</Text>
        <Image style={styles.icon} source={arrowRight} />
      </TouchableOpacity>
    </View>
  )
}

export default ASProfileNavigation
