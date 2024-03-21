import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, Spacing, Typography } from '../../theme'

interface IStyles {
  header: ViewStyle
  title: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  header: {
    alignItems: 'center',
    elevation: Spacing.space_1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Spacing.space_16,
    shadowColor: COLORS.neutral[600],
    shadowOffset: {
      width: Spacing.space_10,
      height: Spacing.space_10,
    },
  },
  title: {
    fontFamily: Typography.secondary['semiBold'],
    color: COLORS.neutral[500],
    fontSize: Spacing.space_18,
    lineHeight: Spacing.space_22,
  },
})
