import { ImageStyle, StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../../../theme/spacing'

interface IStyles {
  container: ViewStyle
  image: ImageStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    flex: Spacing.space_1,
  },

  image: {
    flex: Spacing.space_1,
  },
})
