import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, Spacing, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  title: TextStyle
  text: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    flex: Spacing.space_1,
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.space_22,
    paddingVertical: Spacing.space_54,
  },
  subContainer: {
    alignItems: 'center',
    marginTop: Spacing.space_100,
  },
  title: {
    color: COLORS.primary[50],
    fontFamily: Typography.primary['semiBold'],
    fontSize: Spacing.space_28,
    lineHeight: Spacing.space_34,
    marginTop: Spacing.space_34,
  },
  text: {
    color: COLORS.neutral[600],
    fontFamily: Typography.primary['light'],
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_18,
    textAlign: 'center',
  },
})
