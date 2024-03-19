import { ImageStyle, StatusBar, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'
import { Typography } from '../../theme/typography'

import { ResizeMode } from '../../constants/common-constants'

interface IStyles {
  backButtonIcon: ImageStyle
  emptyContainer: ViewStyle
  header: ViewStyle
  image: ImageStyle
  title: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
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
    paddingVertical: Spacing.space_16,
    paddingTop: StatusBar.currentHeight,
  },
  backButtonIcon: {
    width: Spacing.space_9,
    resizeMode: ResizeMode.Contain,
    marginHorizontal: Spacing.space_24,
    height: Spacing.space_18,
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
    lineHeight: Spacing.space_24,
    textAlign: 'center',
  },
})
