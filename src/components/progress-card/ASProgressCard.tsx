import { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import * as Progress from 'react-native-progress'

import ASModal from '../modal/ASModal'
import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { IProgressDataType as IASProgressCardProps } from '../../types/activity-types'

import { PROGRESS_CARD_IMAGE_SOURCE } from '../../constants/activity-constants'
import { ResizeMode, nextArrowIcon } from '../../constants/common-constants'

import { styles } from './asProgressCard-styles'

const ASProgressCard = (props: IASProgressCardProps) => {
  const { title, progress, description } = props

  const image = PROGRESS_CARD_IMAGE_SOURCE[title]

  const [showModal, setShowModal] = useState<boolean>(false)

  const handleCardPress = () => {
    setShowModal(true)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleCardPress}>
      <ASModal
        showModal={showModal}
        setShowModal={setShowModal}
        icon={image}
        progress={progress}
        description={description}
        title={title}
      />
      <View style={styles.subContainer}>
        <Image source={image} style={styles.image} resizeMode={ResizeMode.Contain} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.text}>{progress}%</Text>
        <Progress.Pie
          progress={Number(progress) / 100}
          size={Spacing.space_20}
          style={styles.pieChart}
          color={COLORS.secondary[700]}
        />
        <Image
          source={nextArrowIcon}
          style={styles.nextArrowIcon}
          resizeMode={ResizeMode.Contain}
        />
      </View>
    </TouchableOpacity>
  )
}

export default ASProgressCard
