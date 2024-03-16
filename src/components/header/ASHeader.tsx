import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { TabNavigatorParams } from '../../types/tabNavigator-types'

import { styles } from './asHeader-styles'

interface IASHeaderProps {
  headerTitle: string
  image?: number
  backButtonImage?: number
  canGoToPreviousScreen?: boolean
}

const ASHeader = (props: IASHeaderProps) => {
  const navigation = useNavigation<BottomTabNavigationProp<TabNavigatorParams>>()
  const { headerTitle, image, backButtonImage, canGoToPreviousScreen } = props
  return (
    <View style={styles.header}>
      {backButtonImage ? (
        <TouchableOpacity
          onPress={() =>
            canGoToPreviousScreen ? navigation.goBack() : navigation.navigate('Dashboard')
          }>
          <Image source={backButtonImage} style={styles.backButtonImage} alt="back button" />
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyContainer} />
      )}

      <Text style={styles.title}>{headerTitle}</Text>
      {image ? (
        <Image source={image} style={styles.image} alt="image" />
      ) : (
        <View style={styles.emptyContainer} />
      )}
    </View>
  )
}

export default ASHeader
