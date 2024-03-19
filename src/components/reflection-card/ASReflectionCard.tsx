import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { IReflectionDataType as IASReflectionCardProps } from '../../types/reflection-types'
import { StackNavigatorParams } from '../../types/stackNavigator-types'

import { Screens } from '../../constants/navigation-constants'
import { ResizeMode, nextArrowIcon } from '../../constants/common-constants'

import { styles } from './asReflectionCard-styles'

const ASReflectionCard = (props: IASReflectionCardProps) => {
  const { date, title } = props

  const navigation = useNavigation<StackNavigationProp<StackNavigatorParams>>()

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(Screens.ReflectionOfTheDay)}>
      <Text style={styles.title}>{date}</Text>
      <View style={styles.subContainer}>
        <Text style={styles.date}>{title}</Text>
        <View style={styles.image}>
          <Image
            source={nextArrowIcon}
            style={styles.forwardArrow}
            resizeMode={ResizeMode.Contain}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ASReflectionCard
