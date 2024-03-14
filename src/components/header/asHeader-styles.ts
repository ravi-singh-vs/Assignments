import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'
import { Typography } from '../../theme/typography'

interface Styles {
  emptyContainer: ViewStyle
  header: ViewStyle
  image: ImageStyle
  title: TextStyle
}

export const styles = StyleSheet.create<Styles>({
  emptyContainer: {
    height: Spacing.space_24,
    marginHorizontal: Spacing.space_24,
    width: Spacing.space_24,
  },
  header: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.space_16,
    paddingVertical: Spacing.space_16,
  },
  image: {
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
})
