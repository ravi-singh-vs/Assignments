import { Image, Text, View } from 'react-native'

import { NotificationDataType as INotificationCardProps } from '../../types/notification-types'
import { getTimeInfo } from '../../utils/common-utils'
import { COLORS } from '../../theme/colors'

import { NotificationImageSource } from '../../constants/notification-constants'
import { ResizeMode } from '../../constants/common-constants'

import { styles } from './NotificationCard-styles'

const NotificationCard = (props: INotificationCardProps) => {
  const { createdAt, image, isRead, text } = props
  const time: string = getTimeInfo(createdAt)
  const imageSource = NotificationImageSource[image]
  const backgroundColor: string = isRead ? COLORS.primary[50] : COLORS.white
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.subContainer}>
        {imageSource && (
          <Image resizeMode={ResizeMode.contain} style={styles.icon} source={imageSource} />
        )}
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{time}</Text>
      </View>
    </View>
  )
}

export default NotificationCard
