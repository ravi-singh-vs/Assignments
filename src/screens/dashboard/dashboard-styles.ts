import { StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
}
export const styles: IStyles = StyleSheet.create({
  container: {
    flex: Spacing.space_1,
    alignItems: 'center',
    marginBottom: Spacing.space_88,
  },
  subContainer: {
    marginTop: Spacing.space_12,
    gap: Spacing.space_12,
    width: Spacing.space_336,
    flexGrow: Spacing.space_1,
    paddingBottom: Spacing.space_16,
  },
})
