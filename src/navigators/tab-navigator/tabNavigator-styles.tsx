import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'
import { Typography } from '../../theme'

interface IStyles {
  tabBar: ViewStyle
  tabBarLabel: TextStyle
  activeIcon: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    height: Spacing.space_70,
  },
  tabBarLabel: {
    fontFamily: Typography.secondary['semiBold'],
    fontSize: Spacing.space_12,
    lineHeight: Spacing.space_20,
  },
  activeIcon: {
    color: COLORS.primary[50],
  },
})
