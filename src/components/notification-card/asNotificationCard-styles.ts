import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Typography } from '../../theme/typography'
import { Spacing } from '../../theme/spacing'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  icon: ImageStyle
  text: TextStyle
  timeContainer: ViewStyle
  timeText: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    borderBottomColor: COLORS.neutral[100],
    borderBottomWidth: Spacing.space_1,
    paddingHorizontal: Spacing.space_20,
    paddingVertical: Spacing.space_18,
  },
  subContainer: {
    flexDirection: 'row',
    marginBottom: Spacing.space_4,
  },
  icon: {
    height: Spacing.space_48,
    width: Spacing.space_48,
  },
  text: {
    color: COLORS.dark,
    fontFamily: Typography['primary'].medium,
    fontSize: Spacing.space_14,
    marginHorizontal: Spacing.space_20,
  },
  timeContainer: {
    paddingHorizontal: Spacing.space_76,
  },
  timeText: {
    color: COLORS.neutral[600],
    fontFamily: Typography['primary'].medium,
    fontSize: Spacing.space_12,
  },
})
