import { StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: COLORS.white,
    flex: Spacing.space_1,
    marginBottom: Spacing.space_88,
  },
  subContainer: {
    flex: Spacing.space_1,
    justifyContent: 'center',
    marginTop: Spacing.space_24,
    paddingHorizontal: Spacing.space_20,
  },
})
