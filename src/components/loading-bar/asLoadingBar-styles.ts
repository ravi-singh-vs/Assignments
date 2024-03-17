import { StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'

interface IStyles {
  outerContainer: ViewStyle
  innerContainer: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  outerContainer: {
    backgroundColor: COLORS.secondary['300'],
    borderRadius: Spacing.space_2,
    height: Spacing.space_12,
    width: Spacing.space_48,
  },
  innerContainer: {
    backgroundColor: COLORS.secondary['500'],
    borderRadius: Spacing.space_2,
    height: Spacing.space_12,
  },
})
