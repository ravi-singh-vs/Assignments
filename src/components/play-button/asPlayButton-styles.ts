import { StyleSheet } from 'react-native'
import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'

export const styles = StyleSheet.create({
  container: {
    borderRadius: Spacing.space_50,
    backgroundColor: COLORS.white,
    elevation: 5,
  },
  image: {
    height: Spacing.space_12,
    width: Spacing.space_12,
    margin: Spacing.space_12,
  },
})
