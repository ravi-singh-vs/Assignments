import { StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'

interface Styles {
  subContainer: ViewStyle
}

export const styles = StyleSheet.create<Styles>({
  subContainer: {
    flexGrow: Spacing.space_1,
  },
})
