import { Image, Text, View } from 'react-native'

import { notificationIcon } from '../../constants/notification-constants'

import { styles } from './EmptyView-styles'

const EmptyView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={notificationIcon} style={styles.image} />
        <View>
          <Text style={styles.text}>No notifications yet!</Text>
          <Text style={styles.subText}>
            {'You have no notification right now.\nCome back later.'}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default EmptyView
