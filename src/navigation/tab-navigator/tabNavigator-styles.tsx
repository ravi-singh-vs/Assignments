import { ImageStyle, Platform, StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'

interface Styles {
  activeIcon: ImageStyle
  icon: ImageStyle
  iconContainer: ViewStyle
  tabBar: ViewStyle
}

export const styles = StyleSheet.create<Styles>({
  tabBar: {
    borderTopLeftRadius: Spacing.space_16,
    borderTopRightRadius: Spacing.space_16,
    borderTopWidth: Spacing.space_0,
    height: Platform.OS === 'android' ? Spacing.space_88 : Spacing.space_100,
    paddingHorizontal: Spacing.space_24,
    paddingVertical: Spacing.space_20,
    position: 'absolute',
  },
  icon: {
    height: Spacing.space_24,
    width: Spacing.space_24,
  },
  iconContainer: {
    alignItems: 'center',
    borderRadius: Spacing.space_100,
    flex: Spacing.space_1,
    justifyContent: 'center',
    marginBottom: Platform.OS === 'android' ? Spacing.space_20 : Spacing.space_0,
  },
  activeIcon: {
    backgroundColor: COLORS.primary[100],
    borderRadius: Spacing.space_100,
    width: Spacing.space_50,
  },
})
