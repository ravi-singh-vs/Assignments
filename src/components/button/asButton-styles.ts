import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Typography } from '../../theme/typography'
import { Spacing } from '../../theme/spacing'

interface IStyles {
  button: ViewStyle
  label: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  button: {
    backgroundColor: COLORS.white,
    borderRadius: Spacing.space_8,
    elevation: Spacing.space_8,
    paddingHorizontal: Spacing.space_24,
    paddingVertical: Spacing.space_12,
    shadowColor: COLORS.tundora,
  },
  label: {
    color: COLORS.neutral[700],
    fontFamily: Typography['primary'].medium,
    textAlign: 'center',
    lineHeight: Spacing.space_18,
  },
})
