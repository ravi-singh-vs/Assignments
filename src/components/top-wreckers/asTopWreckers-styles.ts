import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  wreckerContainer: ViewStyle
  subContainer: ViewStyle
  text: TextStyle
  icon: ImageStyle
  allWreckerText: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: COLORS.primary['700'],
    marginVertical: Spacing.space_28,
    paddingVertical: Spacing.space_24,
  },
  wreckerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: Spacing.space_18,
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.white,
    fontFamily: Typography.secondary['bold'],
    fontSize: Spacing.space_20,
    textAlign: 'center',
  },
  icon: {
    height: Spacing.space_12,
    marginHorizontal: Spacing.space_4,
    marginTop: Spacing.space_2,
    width: Spacing.space_12,
  },
  allWreckerText: {
    color: COLORS.white,
    fontFamily: Typography.primary['bold'],
    fontSize: Spacing.space_14,
  },
})
