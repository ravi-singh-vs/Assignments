import { StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'

interface Styles {
  container: ViewStyle
  subContainer: ViewStyle
}

export const styles = StyleSheet.create<Styles>({
  container: {
    justifyContent: 'center',
    flex: Spacing.space_1,
  },
  subContainer: {
    flexGrow: Spacing.space_1,
  },
})
