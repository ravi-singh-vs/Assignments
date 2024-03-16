import { ImageStyle, StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'

interface Styles {
  tabBar: ViewStyle
  icon: ImageStyle
}

export const styles = StyleSheet.create<Styles>({
  tabBar: {
    height: Spacing.space_88,
    paddingVertical: Spacing.space_20,
    paddingHorizontal: Spacing.space_24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    position: 'absolute',
  },
  icon: {
    width: Spacing.space_24,
    height: Spacing.space_24,
  },
})
