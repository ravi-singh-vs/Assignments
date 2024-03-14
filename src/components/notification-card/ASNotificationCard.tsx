import { Image, Text, View } from 'react-native'

import { getTimeInfo } from '../../utils/common-utils'
import { INotificationDataType as IASNotificationCardProps } from '../../types/notification-types'
import { COLORS } from '../../theme/colors'

import { NOTIFICATION_IMAGE_SOURCE } from '../../constants/notifications-constants'
import { ResizeMode } from '../../constants/common-constants'

import { styles } from './asNotificationCard-styles'

const ASNotificationCard = (props: IASNotificationCardProps) => {
  const { createdAt, image, isRead, text } = props
  const time: string = getTimeInfo(createdAt)
  const imageSource = NOTIFICATION_IMAGE_SOURCE[image]
  const backgroundColor: string = isRead ? COLORS.primary[50] : COLORS.white
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.subContainer}>
        {imageSource && (
          <Image resizeMode={ResizeMode.Contain} style={styles.icon} source={imageSource} />
        )}
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{time}</Text>
      </View>
    </View>
  )
}

export default ASNotificationCard
