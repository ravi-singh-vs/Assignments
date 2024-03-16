import { StyleSheet } from 'react-native'
import { COLORS } from '../../../../theme/colors'
import { Spacing } from '../../../../theme/spacing'
import { Typography } from '../../../../theme/typography'

export const styles = StyleSheet.create({
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
  text: {
    color: COLORS.white,
    fontFamily: Typography.secondary['bold'],
    fontSize: Spacing.space_20,
    textAlign: 'center',
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
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
