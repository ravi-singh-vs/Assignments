import React from 'react'
import { View, ImageBackground } from 'react-native'

import ASHeader from '../../../../components/header/ASHeader'
import { styles } from './reflection-styles'

const Reflection = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/images/my-reflection.png')}
        style={styles.image}>
        <ASHeader
          headerTitle="My Reflections"
          backButtonImage={require('../../../../assets/icons/backGreen.png')}
          canGoToPreviousScreen={true}
        />
      </ImageBackground>
    </View>
  )
}

export default Reflection
