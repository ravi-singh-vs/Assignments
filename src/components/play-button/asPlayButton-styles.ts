import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'

interface IStyles {
  container: ViewStyle
  image: ImageStyle
  closeButton: ViewStyle
  text: TextStyle
}
export const styles = StyleSheet.create<IStyles>({
  container: {
    borderRadius: Spacing.space_50,
    backgroundColor: COLORS.white,
    elevation: Spacing.space_4,
    shadowColor: COLORS.neutral[600],
  },
  image: {
    height: Spacing.space_12,
    margin: Spacing.space_12,
    width: Spacing.space_12,
  },

  closeButton: {
    paddingVertical: Spacing.space_16,
    backgroundColor: COLORS.neutral[500],
    marginBottom: Spacing.space_10,
  },
  text: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: Spacing.space_16,
  },
})
