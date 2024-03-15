import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const ASDashboardHeader = () => {
  const imageSource = require('../../assets/images/profile-hero.png')
  return (
    <View style={{ flex: 1, borderWidth: 5, borderColor: 'red' }}>
      <ImageBackground
        source={imageSource}
        style={{ width: '100%', height: 247, borderWidth: 5 }}
        imageStyle={{ width: '100%' }}></ImageBackground>
    </View>
  )
}

export default ASDashboardHeader
