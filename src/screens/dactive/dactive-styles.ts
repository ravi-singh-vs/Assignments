import { StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    marginBottom: Spacing.space_88,
    backgroundColor: COLORS.white,
    flex: Spacing.space_1,
  },
  subContainer: {
    flex: Spacing.space_1,
    justifyContent: 'center',
    paddingHorizontal: Spacing.space_20,
    marginTop: Spacing.space_24,
  },
})
