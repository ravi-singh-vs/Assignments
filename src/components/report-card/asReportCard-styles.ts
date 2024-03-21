import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, Spacing, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  countryFlagImage: ImageStyle
  countryInfoContainer: ViewStyle
  countryTitle: TextStyle
  detailContainer: ViewStyle
  stats: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: COLORS.neutral[10],
    borderRadius: Spacing.space_10,
    borderWidth: Spacing.space_1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing.space_16,
    paddingHorizontal: Spacing.space_16,
    paddingVertical: Spacing.space_24,
  },
  countryFlagImage: {
    borderRadius: Spacing.space_4,
    height: Spacing.space_34,
    width: Spacing.space_48,
  },
  countryInfoContainer: {
    alignItems: 'center',
    flex: Spacing.space_1,
    flexDirection: 'row',
  },
  countryTitle: {
    fontFamily: Typography.primary['regular'],
    fontSize: Spacing.space_22,
    lineHeight: Spacing.space_28,
    marginLeft: Spacing.space_16,
  },
  detailContainer: {
    alignItems: 'center',
    flex: Spacing.space_1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  stats: {
    color: COLORS.neutral[500],
    fontFamily: Typography.secondary['bold'],
    fontSize: Spacing.space_18,
    lineHeight: Spacing.space_22,
    marginRight: Spacing.space_12,
  },
})
