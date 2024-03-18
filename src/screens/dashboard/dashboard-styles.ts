import { StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
}
export const styles: IStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    flex: Spacing.space_1,
    marginBottom: Spacing.space_88,
  },
  subContainer: {
    flexGrow: Spacing.space_1,
    gap: Spacing.space_12,
    marginTop: Spacing.space_12,
    paddingBottom: Spacing.space_16,
    width: Spacing.space_336,
  },
})
