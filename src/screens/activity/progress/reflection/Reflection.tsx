import React from 'react'
import { View, ImageBackground } from 'react-native'

import ASHeader from '../../../../components/header/ASHeader'

const Reflection = () => {
  return (
    <View>
      <ImageBackground source={require('../../../../assets/images/my-reflection.png')}>
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
