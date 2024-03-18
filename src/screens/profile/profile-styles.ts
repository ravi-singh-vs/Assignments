import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  image: ImageStyle
  container: ViewStyle
  infoContainer: ViewStyle
  name: TextStyle
  data: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  image: {
    paddingBottom: Spacing.space_24,
    width: '100%',
  },

  container: {
    marginHorizontal: Spacing.space_20,
    marginTop: Spacing.space_28,
  },
  infoContainer: {
    marginLeft: Spacing.space_24,
    marginTop: Spacing.space_48,
  },
  name: {
    color: COLORS.white,
    fontFamily: Typography.primary['bold'],
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_28,
  },
  data: {
    color: COLORS.white,
    fontFamily: Typography.primary['medium'],
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_24,
  },
})
