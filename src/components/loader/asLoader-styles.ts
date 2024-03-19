import { StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'

interface IStyles {
  container: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex:Spacing.space_1,
    justifyContent: 'center',
  },
})
