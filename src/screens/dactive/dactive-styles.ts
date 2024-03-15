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
    backgroundColor: COLORS.white,
    flex : Spacing.space_1
  },
  subContainer: {
    flex: Spacing.space_1,
    justifyContent: 'center',
    paddingHorizontal: Spacing.space_20,
  },
})
