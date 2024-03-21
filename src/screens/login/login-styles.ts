import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, Spacing, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  title: TextStyle
  loginForm: ViewStyle
  inputContainer: ViewStyle
  inputFieldLabel: TextStyle
  mandatoryLabel: TextStyle
  inputField: TextStyle
  button: ViewStyle
  label: TextStyle
  errorText: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: Spacing.space_22,
    paddingVertical: Spacing.space_26,
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Spacing.space_120,
  },
  title: {
    color: COLORS.primary[50],
    fontFamily: Typography.primary['semiBold'],
    fontSize: Spacing.space_28,
    lineHeight: Spacing.space_34,
    marginTop: Spacing.space_34,
    textAlign: 'center',
  },
  loginForm: {
    marginTop: Spacing.space_60,
  },
  inputContainer: {
    marginBottom: Spacing.space_4,
  },
  inputFieldLabel: {
    color: COLORS.neutral[200],
    fontFamily: Typography.primary['medium'],
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_24,
    paddingVertical: Spacing.space_8,
  },
  mandatoryLabel: {
    color: COLORS.success[100],
  },
  inputField: {
    borderColor: COLORS.neutral[50],
    borderRadius: Spacing.space_16,
    borderWidth: Spacing.space_1,
    fontSize: Spacing.space_16,
    padding: Spacing.space_16,
  },
  button: {
    backgroundColor: COLORS.primary[50],
    borderRadius: Spacing.space_8,
    marginTop: Spacing.space_40,
    padding: Spacing.space_16,
  },
  label: {
    color: COLORS.white,
    fontFamily: Typography.secondary['regular'],
    fontSize: Spacing.space_16,
    textAlign: 'center',
  },
  errorText: {
    color: COLORS.primary[50],
    fontFamily: Typography.primary['medium'],
    paddingVertical: 1,
  },
})
