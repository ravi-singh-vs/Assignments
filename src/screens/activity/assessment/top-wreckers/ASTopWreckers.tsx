import React, { useState } from 'react'
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native'

import ASModal from '../../../../components/modal/ASModal'
import ASTopWreckerCard from '../../../../components/top-wrecker-card/ASTopWreckerCard'
import { COLORS } from '../../../../theme/colors'
import { IASTopWreckersProps } from '../../../../types/activity-types'

import { ViewAllWreckers } from '../../../../constants/activity-constants'

import { styles } from './asTopWreckers-styles'

const ASTopWreckers = ({ wreckers }: IASTopWreckersProps) => {
  const [visible, setVisible] = useState(false)

  const handleAllWreckerPress = () => {
    setVisible(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Top Wreckers</Text>
      <View style={styles.wreckerContainer}>
        {wreckers.length ? (
          wreckers.map(item => {
            return (
              <ASTopWreckerCard
                key={item.id}
                image={item.title}
                percent={item.progress}
                title={item.title}
                description={item.description}
              />
            )
          })
        ) : (
          <ActivityIndicator size="large" color={COLORS.white} />
        )}
      </View>
      <TouchableOpacity style={styles.subContainer} onPress={handleAllWreckerPress}>
        <ASModal
          showModal={visible}
          setShowModal={setVisible}
          icon={ViewAllWreckers['Distractor']}
          title="Coming Soon...."
          description="All Wreckers will be updated !"
        />
        <Text style={styles.allWreckerText}>View All Wreckers</Text>
        <Image style={styles.icon} source={ViewAllWreckers['ArrowRight']} />
      </TouchableOpacity>
    </View>
  )
}

export default ASTopWreckers
