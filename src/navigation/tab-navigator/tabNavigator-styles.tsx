import { ImageStyle, StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'

interface Styles {
  icon: ImageStyle
  tabBar: ViewStyle
}

export const styles = StyleSheet.create<Styles>({
  tabBar: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: Spacing.space_88,
    paddingHorizontal: Spacing.space_24,
    paddingVertical: Spacing.space_20,
    position: 'absolute',
  },
  icon: {
    height: Spacing.space_24,
    width: Spacing.space_24,
  },
})
