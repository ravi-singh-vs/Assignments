import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  textContainer: ViewStyle
  title: TextStyle
  buttonContainer: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    borderRadius: Spacing.space_16,
    flex: Spacing.space_1,
    marginBottom: Spacing.space_20,
    overflow: 'hidden',
  },
  textContainer: {
    paddingHorizontal: Spacing.space_16,
    paddingVertical: Spacing.space_8,
  },

  title: {
    color: COLORS.secondary[600],
    fontFamily: Typography['secondary'].bold,
    fontSize: Spacing.space_18,
    paddingVertical: Spacing.space_8,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.space_16,
    marginTop: Spacing.space_48,
    paddingVertical: Spacing.space_8,
  },
})
