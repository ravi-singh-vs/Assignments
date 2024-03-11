import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './Error-styles'
const Error = ({error} : {error : string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> ⚠ {error}</Text>
    </View>
  )
}

export default Error

