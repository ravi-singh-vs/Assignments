import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './asReflectionCard-styles'

const ASReflectionCard = (props: any) => {
  const { date, title } = props.item
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{date}</Text>
      <View style={styles.subContainer}>
        <Text style={styles.date}>{title}</Text>
        <View style={styles.image}>
          <Image source={require('../../assets/icons/next.png')} style={styles.forwardArrow} />
        </View>
      </View>
    </View>
  )
}

export default ASReflectionCard
