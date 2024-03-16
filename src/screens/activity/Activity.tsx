import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import ASHeader from '../../components/header/ASHeader'
import Progress from './progress/Progress'
import Assessment from './assessment/Assessment'

import { styles } from './activity-styles'

const Activity = () => {
  const [activeTab, setActiveTab] = useState('progress')
  return (
    <View style={styles.container}>
      <ASHeader headerTitle="Your Activity" />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, activeTab === 'progress' && styles.activeTab]}
          onPress={() => setActiveTab('progress')}>
          <Text style={[styles.text, activeTab === 'progress' && styles.activeTabText]}>
            Progress
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, activeTab === 'assessment' && styles.activeTab]}
          onPress={() => setActiveTab('assessment')}>
          <Text style={[styles.text, activeTab === 'assessment' && styles.activeTabText]}>
            Assessments
          </Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'progress' ? <Progress /> : <Assessment />}
    </View>
  )
}

export default Activity
