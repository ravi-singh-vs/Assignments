import { StyleSheet, ViewStyle } from 'react-native'

import { COLORS } from '../../../theme/colors'
import { Spacing } from '../../../theme/spacing'

interface IStyles {
  container: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: COLORS.primary['500'],
    borderTopLeftRadius: Spacing.space_16,
    borderTopRightRadius: Spacing.space_16,
    marginTop: Spacing.space_30,
    paddingVertical: Spacing.space_32,
  },
})
