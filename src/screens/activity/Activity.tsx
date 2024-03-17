import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import ASHeader from '../../components/header/ASHeader'
import Progress from './progress/Progress'
import Assessment from './assessment/Assessment'

import { styles } from './activity-styles'

const Activity = () => {
  const [activeButton, setActiveButton] = useState<string>('Progress')

  const renderButton = (buttonName: string) => {
    return (
      <TouchableOpacity
        style={[styles.button, activeButton === buttonName && styles.activeButton]}
        onPress={() => setActiveButton(buttonName)}>
        <Text style={[styles.label, activeButton === buttonName && styles.activeButtonLabel]}>
          {buttonName}
        </Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <ASHeader headerTitle="Your Activity" />
      <View style={styles.buttonContainer}>
        {renderButton('Progress')}
        {renderButton('Assessment')}
      </View>
      {activeButton === 'Progress' ? <Progress /> : <Assessment />}
    </View>
  )
}

export default Activity
