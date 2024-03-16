import React, { useState } from 'react'
import { Image, Pressable, Text } from 'react-native'

import { Typography } from '../../theme/typography'
import ASLoadingBar from '../loading-bar/ASLoadingBar'

import compassion from '../../assets/icons/compassion.png'
import courage from '../../assets/icons/courage.png'
import curiosity from '../../assets/icons/curiosity.png'
import distractor from '../../assets/icons/distractor.png'
import overthinker from '../../assets/icons/overthinker-grey.png'
import procrastinator from '../../assets/icons/procrastinator.png'
import ASModal from '../modal/ASModal'
import { styles } from './asTopWreckerCard-styles'

interface IASTopWreckerCardProps {
  image: string
  percent: string
  title: string
  description: string
}

const ASTopWreckerCard = ({ image, percent, title, description }: IASTopWreckerCardProps) => {
  const [showModal, setShowModal] = useState(false)

  const wreckerImage: any = {
    Procrastinator: procrastinator,
    Overthinker: overthinker,
    Courage: courage,
    Compassion: compassion,
    Curiosity: curiosity,
    Distractor: distractor,
  }
  const handleCardPress = () => {
    setShowModal(true)
  }

  return (
    <Pressable style={styles.container} onPress={handleCardPress}>
      <ASModal
        showModal={showModal}
        setShowModal={setShowModal}
        icon={wreckerImage[image]}
        progress={percent}
        description={description}
        title={title}
      />
      <Image style={styles.icon} source={wreckerImage[image]} />
      <Text style={[styles.text, { fontFamily: Typography.secondary['bold'] }]}>{percent}%</Text>
      <ASLoadingBar loadingLevel={percent} />
      <Text style={[styles.text, { fontFamily: Typography.primary['bold'] }]}>{title}</Text>
    </Pressable>
  )
}

export default ASTopWreckerCard
