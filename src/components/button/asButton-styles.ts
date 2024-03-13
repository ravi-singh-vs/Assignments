import { StyleSheet, TextStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Typography } from '../../theme/typography'
import { Spacing } from '../../theme/spacing'

interface Styles {
  button: TextStyle
}
export const styles = StyleSheet.create<Styles>({
  button: {
    backgroundColor: COLORS.white,
    borderRadius: Spacing.space_8,
    color: COLORS.neutral[700],
    elevation: Spacing.space_8,
    fontFamily: Typography['primary'].medium,
    overflow: 'hidden',
    paddingHorizontal: Spacing.space_16,
    paddingVertical: Spacing.space_12,
    shadowColor: COLORS.tundora,
    textAlign: 'center',
    width: Spacing.space_93,
  },
})
