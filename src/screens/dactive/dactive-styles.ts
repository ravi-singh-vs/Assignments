import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Typography } from '../../theme/typography'
import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'
interface Styles {
  header: ViewStyle
  icon: ImageStyle
  title: TextStyle
  container: ViewStyle
}
export const styles = StyleSheet.create<Styles>({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.space_24,
    paddingVertical: Spacing.space_16,
  },

  icon: {
    height: Spacing.space_24,
    marginHorizontal: Spacing.space_24,
    width: Spacing.space_24,
  },
  title: {
    color: COLORS.neutral[700],
    flex: Spacing.space_1,
    fontFamily: Typography['secondary'].bold,
    fontSize: Spacing.space_18,
    textAlign: 'center',
  },
  container: {
    flex: Spacing.space_1,
    justifyContent: 'center',
    paddingHorizontal: Spacing.space_20,
  },
})
