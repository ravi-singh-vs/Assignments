import { StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'

interface Styles {
  container: ViewStyle
  subContainer: ViewStyle
}

export const styles = StyleSheet.create<Styles>({
  container: {
    marginBottom: Spacing.space_88,
    flex: Spacing.space_1,
    backgroundColor: COLORS.white,
  },
  subContainer: {
    flexGrow: Spacing.space_1,
  },
})
