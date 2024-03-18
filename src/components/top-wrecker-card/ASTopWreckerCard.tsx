import React, { useState } from 'react'
import { Image, Pressable, Text } from 'react-native'

import ASLoadingBar from '../loading-bar/ASLoadingBar'
import ASModal from '../modal/ASModal'
import { Typography } from '../../theme/typography'
import { WreckerImage } from '../../constants/activity-constants'

import { styles } from './asTopWreckerCard-styles'


interface IASTopWreckerCardProps {
  image: string
  percent: string
  title: string
  description: string
}

const ASTopWreckerCard = ({ image, percent, title, description }: IASTopWreckerCardProps) => {
  const [showModal, setShowModal] = useState(false)

  const handleCardPress = () => {
    setShowModal(true)
  }

  return (
    <Pressable style={styles.container} onPress={handleCardPress}>
      <ASModal
        showModal={showModal}
        setShowModal={setShowModal}
        icon={WreckerImage[image]}
        progress={percent}
        description={description}
        title={title}
      />
      <Image style={styles.icon} source={WreckerImage[image]} />
      <Text style={[styles.text, { fontFamily: Typography.secondary['bold'] }]}>{percent}%</Text>
      <ASLoadingBar loadingLevel={percent} />
      

      <Text style={[styles.text, { fontFamily: Typography.primary['bold'] }]}>{title}</Text>
    </Pressable>
  )
}

export default ASTopWreckerCard
