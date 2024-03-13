import { Image, Text, View } from 'react-native'

import { notificationIcon } from '../../constants/notifications-constants'

import { styles } from './asEmptyView-styles'

const ASEmptyView = () => {
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

export default ASEmptyView
