import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'

interface IStyles {
  activeButton: ViewStyle
  activeButtonLabel: TextStyle
  button: ViewStyle
  buttonContainer: ViewStyle
  container: ViewStyle
  label: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: COLORS.white,
    flex: Spacing.space_1,
    marginBottom: Spacing.space_88,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: Spacing.space_8,
    paddingHorizontal: Spacing.space_20,
  },
  button: {
    backgroundColor: COLORS.neutral[50],
    borderRadius: Spacing.space_8,
    flex: Spacing.space_1,
    paddingHorizontal: Spacing.space_16,
    paddingVertical: Spacing.space_12,
  },
  label : {
    color: COLORS.primary[500],
    textAlign: 'center',
  },
  activeButton: {
    backgroundColor: COLORS.primary[500],
  },
  activeButtonLabel: {
    color: COLORS.white,
  },
})
