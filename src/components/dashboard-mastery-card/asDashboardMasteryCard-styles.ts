import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  imageContainer: ViewStyle
  image: ImageStyle
  detailContainer: ViewStyle
  detailTopContainer: ViewStyle
  listenIconContainer: ViewStyle
  listenContainer: ViewStyle
  listenText: TextStyle
  icon: ImageStyle
  title: TextStyle
  detailBottomContainer: ViewStyle
  time: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary[50],
    flexDirection: 'row',
    gap: Spacing.space_16,
    paddingHorizontal: Spacing.space_36,
    paddingVertical: Spacing.space_24,
  },
  image: {
    height: Spacing.space_72,
    width: Spacing.space_72,
  },
  detailContainer: {
    flex: Spacing.space_1,
  },
  detailTopContainer: {
    gap: Spacing.space_4,
  },
  listenIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listenContainer: {
    flexDirection: 'row',
    gap: Spacing.space_8,
  },
  title: {
    color: COLORS.neutral[700],
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_16,
  },
  icon: {
    height: Spacing.space_16,
    width: Spacing.space_16,
  },
  detailBottomContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    fontFamily: Typography.primary.medium,
    fontSize: Spacing.space_12,
  },
  listenText: {
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_12,
  },
  imageContainer: {
    backgroundColor: COLORS.primary[100],
    borderRadius: Spacing.space_8,
    justifyContent: 'flex-end',
  },
})
