import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Typography } from '../../theme/typography'
import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  image: ImageStyle
  date: TextStyle
  title: TextStyle
  forwardArrow: ImageStyle
}
export const styles: IStyles = StyleSheet.create({
  container: {
    paddingVertical: Spacing.space_12,
    paddingHorizontal: Spacing.space_20,
    gap: Spacing.space_4,
    borderBottomWidth: Spacing.space_1,
  },

  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  image: {
    height: Spacing.space_16,
    width: Spacing.space_16,
  },

  date: {
    fontFamily: Typography.primary.bold,
    color: COLORS.secondary[500],
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_20,
  },
  title: {
    fontFamily: Typography.secondary.bold,
    color: COLORS.neutral[700],
    fontSize: Spacing.space_20,
    lineHeight: Spacing.space_22,
  },

  forwardArrow: { flex: 1, resizeMode: 'contain' },
})
