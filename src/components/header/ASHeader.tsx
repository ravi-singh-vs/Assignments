import { Image, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { TabNavigatorParams } from '../../types/tabNavigator-types'

import { styles } from './asHeader-styles'
import { COLORS } from '../../theme/colors'

interface IASHeaderProps {
  headerTitle: string
  backButtonImage?: number
  canGoToPreviousScreen?: boolean
  backgroundColor?: string
  color?: string
}

const ASHeader = (props: IASHeaderProps) => {
  const navigation = useNavigation<BottomTabNavigationProp<TabNavigatorParams>>()
  const {
    headerTitle,
    backButtonImage,
    canGoToPreviousScreen = false,
    backgroundColor = COLORS.white,
    color = COLORS.neutral[700],
  } = props
  return (
    <View style={[styles.header, { backgroundColor: backgroundColor }]}>
      {backButtonImage ? (
        <TouchableOpacity
          onPress={() =>
            canGoToPreviousScreen ? navigation.goBack() : navigation.navigate('Dashboard')
          }>
          <Image source={backButtonImage} style={styles.backButtonImage} />
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyContainer} />
      )}
      <Text style={[styles.title, { color: color }]}>{headerTitle}</Text>
      <View style={styles.emptyContainer} />
    </View>
  )
}

export default ASHeader
