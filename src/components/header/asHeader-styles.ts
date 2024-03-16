import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'
import { Typography } from '../../theme/typography'

import { ResizeMode } from '../../constants/common-constants'

interface IStyles {
  emptyContainer: ViewStyle
  header: ViewStyle
  image: ImageStyle
  title: TextStyle
  backButtonImage: ImageStyle
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
  },
  backButtonImage: {
    width: Spacing.space_9,
    height: Spacing.space_18,
    resizeMode: ResizeMode.Contain,
    marginHorizontal: Spacing.space_24,
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
