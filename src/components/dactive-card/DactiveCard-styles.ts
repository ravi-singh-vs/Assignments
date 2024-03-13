import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Typography } from '../../theme/typography'
import { Spacing } from '../../theme/spacing'

interface Styles {
  container: ViewStyle
  image: ImageStyle
  title: TextStyle
  btnContainer: ViewStyle
  button: TextStyle
}
export const styles = StyleSheet.create<Styles>({
  container: {
    borderRadius: Spacing.space_16,
    height: Spacing.space_148,
    marginBottom: Spacing.space_20,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    color: COLORS.secondary[600],
    fontFamily: Typography['secondary'].bold,
    fontSize: Spacing.space_18,
    paddingVertical: Spacing.space_8,
    textAlign: 'center',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: Spacing.space_12,
  },

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
