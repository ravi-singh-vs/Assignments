import React, { Dispatch, SetStateAction } from 'react'
import { Image, ImageSourcePropType, Text, TouchableOpacity } from 'react-native'

import { ResizeMode } from '../../constants/common-constants'

import { styles } from './asProfileNavigtaion-styles'

interface IProfileNavigationProps {
  title: string
  arrowRight: ImageSourcePropType
  setShowWebView: Dispatch<SetStateAction<boolean>>
}

const ASProfileNavigation = (props: IProfileNavigationProps) => {
  const { title, arrowRight, setShowWebView } = props

  const handleOnPress = () => {
    setShowWebView(true)
  }
  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <Text style={styles.text}>{title}</Text>
      <Image style={styles.image} source={arrowRight} resizeMode={ResizeMode.Contain} />
    </TouchableOpacity>
  )
}

export default ASProfileNavigation
