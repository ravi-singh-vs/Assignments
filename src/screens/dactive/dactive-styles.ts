import { StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'

interface Styles {
  container: ViewStyle
}
export const styles = StyleSheet.create<Styles>({
 
  container: {
    flex: Spacing.space_1,
    justifyContent: 'center',
    paddingHorizontal: Spacing.space_20,
  },
})
