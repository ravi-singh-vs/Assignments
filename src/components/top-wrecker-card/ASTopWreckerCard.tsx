import React, { useState } from 'react'
import { Image, Pressable, Text } from 'react-native'
import * as Progress from 'react-native-progress'

import ASModal from '../modal/ASModal'
import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'
import { Typography } from '../../theme/typography'

import { ResizeMode } from '../../constants/common-constants'
import { WreckerImage } from '../../constants/activity-constants'

import { styles } from './asTopWreckerCard-styles'


interface IASTopWreckerCardProps {
  image: string
  percent: string
  title: string
  description: string
}

const ASTopWreckerCard = (props: IASTopWreckerCardProps) => {
  const { image, percent, title, description } = props
  const [showModal, setShowModal] = useState<boolean>(false)

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
      <Image style={styles.icon} source={WreckerImage[image]} resizeMode={ResizeMode.Center} />
      <Text style={[styles.text, { fontFamily: Typography.secondary['bold'] }]}>{percent}%</Text>
      <Progress.Bar
        progress={Number(percent) / 100}
        width={Spacing.space_50}
        height={Spacing.space_12}
        color={COLORS.secondary[500]}
        style={styles.progressBar}
      />
      <Text style={[styles.text, { fontFamily: Typography.primary['bold'] }]}>{title}</Text>
    </Pressable>
  )
}

export default ASTopWreckerCard
