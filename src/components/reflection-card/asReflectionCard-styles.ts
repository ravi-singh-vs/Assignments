import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Typography } from '../../theme/typography'
import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'

import { ResizeMode } from '../../constants/common-constants'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  image: ImageStyle
  date: TextStyle
  title: TextStyle
  forwardArrow: ImageStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    borderBottomColor: COLORS.primary[100],
    borderBottomWidth: Spacing.space_1,
    gap: Spacing.space_4,
    paddingHorizontal: Spacing.space_20,
    paddingVertical: Spacing.space_12,
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
    color: COLORS.secondary[500],
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_20,
  },
  title: {
    color: COLORS.neutral[700],
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_20,
    lineHeight: Spacing.space_22,
  },
  forwardArrow: {
    flex: Spacing.space_1,
    resizeMode: ResizeMode.Contain,
  },
})
