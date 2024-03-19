import { StyleSheet, ViewStyle } from 'react-native'
import { Spacing } from './src/theme/spacing'

interface IStyles {
  container: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    flex: Spacing.space_1,
  },
})

