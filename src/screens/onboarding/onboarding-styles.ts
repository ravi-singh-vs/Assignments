import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, Spacing, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  imageContainer: ViewStyle
  detailContainer: ViewStyle
  title: TextStyle
  description: TextStyle
  footer: ViewStyle
  label: TextStyle
  activeScreenIndicatorContainer: ViewStyle
  activeScreenIndicator: ViewStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    flex: Spacing.space_1,
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: Spacing.space_150,
    elevation: Spacing.space_20,
    height: Spacing.space_260,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    shadowColor: COLORS.neutral[400],
    width: Spacing.space_260,
  },
  detailContainer: {
    marginTop: Spacing.space_50,
  },
  title: {
    color: COLORS.neutral[400],
    fontFamily: Typography.primary['semiBold'],
    fontSize: Spacing.space_28,
    lineHeight: Spacing.space_34,
    padding: Spacing.space_10,
    textAlign: 'center',
  },
  description: {
    color: COLORS.neutral[100],
    fontFamily: Typography.primary['medium'],
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_22,
    textAlign: 'center',
  },
  footer: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.space_24,
    paddingVertical: Spacing.space_28,
  },
  label: {
    fontFamily: Typography.secondary['regular'],
    fontStyle: 'italic',
    lineHeight: Spacing.space_16,
  },
  activeScreenIndicatorContainer: {
    flexDirection: 'row',
  },
  activeScreenIndicator: {
    backgroundColor: COLORS.primary[50],
    borderRadius: Spacing.space_10,
    height: Spacing.space_10,
    marginHorizontal: Spacing.space_5,
    width: Spacing.space_10,
  },
})
