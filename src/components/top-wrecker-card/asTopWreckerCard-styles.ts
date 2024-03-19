import { ImageStyle, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'

interface IStyles {
  container: ViewStyle
  icon: ImageStyle
  text: TextStyle
  progressBar: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    backgroundColor: COLORS.white,
    borderRadius: Spacing.space_48,
    height: Spacing.space_76,
    width: Spacing.space_76,
  },
  text: {
    color: COLORS.white,
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_32,
  },
  progressBar: {
    backgroundColor: COLORS.secondary[300],
  },
})
