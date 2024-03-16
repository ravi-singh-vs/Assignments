import { View, Text, Image, TouchableOpacity } from 'react-native'
import * as Progress from 'react-native-progress'

import { IProgressDataType as IASProgressCardProps } from '../../types/activity-types'
import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'

import { PROGRESS_CARD_IMAGE_SOURCE } from '../../constants/activity-constants'
import { nextButtonIcon } from '../../constants/common-constants'

import { styles } from './asProgressCard-styles'

const ASProgressCard = (props: IASProgressCardProps) => {
  const { title, progress } = props

  const image = PROGRESS_CARD_IMAGE_SOURCE[title]

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.text}>{progress}%</Text>
        <Progress.Pie
          progress={Number(progress) / 100}
          size={Spacing.space_20}
          style={styles.chart}
          color={COLORS.secondary[700]}
        />
        <TouchableOpacity style={styles.button}>
          <Image source={nextButtonIcon} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ASProgressCard
