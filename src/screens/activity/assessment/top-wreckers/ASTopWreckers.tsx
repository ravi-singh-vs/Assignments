import React, { useState } from 'react'
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native'

import ASModal from '../../../../components/modal/ASModal'
import ASTopWreckerCard from '../../../../components/top-wrecker-card/ASTopWreckerCard'
import arrowRight from '../../../../assets/icons/arrow-right.png'
import distractor from '../../../../assets/icons/distractor.png'
import { COLORS } from '../../../../theme/colors'

import { styles } from './asTopWreckers-styles'

interface IWrecker {
  id: string
  title: string
  progress: string
  description: string
}

interface IASTopWreckersProps {
  wreckers: IWrecker[]
}

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
          icon={distractor}
          title="Coming Soon...."
          description="All Wreckers will be updated !"
        />
        <Text style={styles.allWreckerText}>View All Wreckers</Text>
        <Image style={styles.icon} source={arrowRight} />
      </TouchableOpacity>
    </View>
  )
}

export default ASTopWreckers
