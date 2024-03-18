import { ImageStyle, StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'

interface Styles {
  icon: ImageStyle
  tabBar: ViewStyle
  iconContainer: ViewStyle
  activeIcon: ImageStyle
}

export const styles = StyleSheet.create<Styles>({
  tabBar: {
    borderTopLeftRadius: Spacing.space_16,
    borderTopRightRadius: Spacing.space_16,
    height: Spacing.space_88,
    paddingHorizontal: Spacing.space_24,
    paddingVertical: Spacing.space_20,
    position: 'absolute',
    borderTopWidth: Spacing.space_0,
  },
  icon: {
    height: Spacing.space_24,
    width: Spacing.space_24,
  },
  iconContainer: {
    flex: Spacing.space_1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Spacing.space_100,
    marginBottom: Spacing.space_20,
  },
  activeIcon: {
    backgroundColor: COLORS.primary[100],
    borderRadius: Spacing.space_100,
    width: Spacing.space_50,
  },
})
