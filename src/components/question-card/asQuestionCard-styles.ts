import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Typography } from '../../theme/typography'
import { Spacing } from '../../theme/spacing'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  text: TextStyle
  inputField: TextStyle
  buttonContainer: ViewStyle
  label: TextStyle
  previousButton: ViewStyle
  nextButton: ViewStyle
  submitButton: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: Spacing.space_16,
    marginTop: Spacing.space_32,
    paddingHorizontal: Spacing.space_24,
    paddingVertical: Spacing.space_32,
  },
  subContainer: {
    backgroundColor: COLORS.primary[50],
    borderRadius: Spacing.space_8,
    paddingHorizontal: Spacing.space_16,
    paddingVertical: Spacing.space_20,
  },
  text: {
    color: COLORS.neutral[700],
    fontFamily: Typography.primary['medium'],
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_24,
    paddingHorizontal: Spacing.space_10,
  },
  inputField: {
    color: COLORS.neutral[700],
    fontFamily: Typography.primary['medium'],
    fontSize: Spacing.space_16,
    height: Spacing.space_350,
    lineHeight: Spacing.space_24,
    marginTop: Spacing.space_30,
    paddingHorizontal: Spacing.space_20,
    paddingVertical: Spacing.space_20,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing.space_30,
  },
  label: {
    color: COLORS.primary[600],
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_24,
    paddingHorizontal: Spacing.space_20,
  },
  previousButton: {
    position: 'absolute',
    left: Spacing.space_0,
  },
  nextButton: {
    position: 'absolute',
    right: Spacing.space_0,
  },
  submitButton: {
    position: 'absolute',
    right: Spacing.space_0,
  },
})
