import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../../../theme/colors'
import { Spacing } from '../../../../theme/spacing'
import { Typography } from '../../../../theme/typography'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  iconContainer: ViewStyle
  scoreContainer: ViewStyle
  outerContainer: ViewStyle
  innerContainer: ViewStyle
  icon: ImageStyle
  text: TextStyle
  score: TextStyle
  scoreText: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    gap: Spacing.space_8,
    marginHorizontal: Spacing.space_24,
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignItems: 'center',
  },
  scoreContainer: {
    alignItems: 'center',
  },
  outerContainer: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    borderRadius: 100,
    borderWidth: Spacing.space_1,
    height: Spacing.space_12,
    width: Spacing.space_148,
  },
  innerContainer: {
    borderRadius: Spacing.space_8,
    height: Spacing.space_12,
  },
  icon: {
    height: Spacing.space_40,
    width: Spacing.space_40,
  },
  text: {
    fontFamily: Typography.secondary['bold'],
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_24,
    paddingVertical: Spacing.space_4,
  },
  score: {
    fontFamily: Typography.secondary['bold'],
    fontSize: Spacing.space_32,
    lineHeight: Spacing.space_48,
    marginBottom: Spacing.space_8,
  },
  scoreText: {
    color: COLORS.white,
    textAlign: 'center',
  },
})
