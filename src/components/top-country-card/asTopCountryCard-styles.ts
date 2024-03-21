import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, Spacing, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  progressChart: ViewStyle
  subContainer: ViewStyle
  detailContainer: ViewStyle
  countryTitle: TextStyle
  stats: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    borderColor: COLORS.neutral['10'],
    borderRadius: Spacing.space_10,
    borderWidth: Spacing.space_1,
    flexDirection: 'row',
    marginBottom: Spacing.space_16,
    paddingHorizontal: Spacing.space_8,
    paddingVertical: Spacing.space_12,
  },
  progressChart: {
    color: COLORS.neutral[500],
    fontFamily: Typography.secondary['bold'],
    fontSize: Spacing.space_16,
    position: 'absolute',
  },
  subContainer: {
    flex: Spacing.space_1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  detailContainer: {
    justifyContent: 'center',
  },
  countryTitle: {
    color: COLORS.neutral[500],
    fontFamily: Typography.secondary['semiBold'],
    fontSize: Spacing.space_17,
    lineHeight: Spacing.space_22,
    marginBottom: Spacing.space_8,
  },
  stats: {
    fontFamily: Typography.secondary['regular'],
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_18,
  },
})
