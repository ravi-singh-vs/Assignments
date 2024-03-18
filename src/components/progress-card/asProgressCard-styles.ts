import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'
import { COLORS } from '../../theme/colors'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  image: ImageStyle
  title: TextStyle
  detailContainer: ViewStyle
  text: TextStyle
  pieChart: ImageStyle
  nextButtonIcon: ImageStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    borderBottomColor: COLORS.primary[100],
    borderBottomWidth: Spacing.space_1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Spacing.space_16,
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    backgroundColor: COLORS.accent[50],
    borderRadius: Spacing.space_100,
    height: Spacing.space_48,
    width: Spacing.space_48,
  },
  title: {
    color: COLORS.neutral[700],
    fontFamily: Typography['primary'].bold,
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_20,
    marginLeft: Spacing.space_14,
  },
  detailContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: COLORS.charcoal,
    fontFamily: Typography['secondary'].bold,
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_20,
  },
  pieChart: {
    backgroundColor: COLORS.secondary[200],
    borderRadius: Spacing.space_100,
    marginLeft: Spacing.space_8,
    marginRight: Spacing.space_16,
  },
  nextButtonIcon: {
    height: Spacing.space_16,
    width: Spacing.space_16,
  },
})
