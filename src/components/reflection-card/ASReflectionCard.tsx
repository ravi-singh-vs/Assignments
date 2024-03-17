import { View, Text, Image } from 'react-native'
import React from 'react'

import { nextButtonIcon } from '../../constants/common-constants'
import { IReflectionCard } from '../../types/reflection-types'
import { styles } from './asReflectionCard-styles'

interface IASReflectionCard {
  item: IReflectionCard
}
const ASReflectionCard = (props: IASReflectionCard) => {
  const { date, title } = props.item
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{date}</Text>
      <View style={styles.subContainer}>
        <Text style={styles.date}>{title}</Text>
        <View style={styles.image}>
          <Image source={nextButtonIcon} style={styles.forwardArrow} />
        </View>
      </View>
    </View>
  )
}

export default ASReflectionCard
