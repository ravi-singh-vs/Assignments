import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { COLORS } from '../../theme/colors'
import { TabNavigatorParams } from '../../types/tabNavigator-types'

import { Screens } from '../../constants/navigation-constants'
import { ResizeMode } from '../../constants/common-constants'

import { styles } from './asHeader-styles'

interface IASHeaderProps {
  headerTitle: string
  backButtonIcon?: ImageSourcePropType
  canGoToPreviousScreen?: boolean
  backgroundColor?: string
  color?: string
}

const ASHeader = (props: IASHeaderProps) => {
  const navigation = useNavigation<BottomTabNavigationProp<TabNavigatorParams>>()
  const {
    headerTitle,
    backButtonIcon,
    canGoToPreviousScreen = false,
    backgroundColor = COLORS.white,
    color = COLORS.neutral[700],
  } = props
  return (
    <View style={[styles.header, { backgroundColor: backgroundColor }]}>
      {backButtonIcon ? (
        <TouchableOpacity
          onPress={() =>
            canGoToPreviousScreen ? navigation.goBack() : navigation.navigate(Screens.Dashboard)
          }>
          <Image
            source={backButtonIcon}
            style={styles.backButtonIcon}
            resizeMode={ResizeMode.Contain}
          />
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
