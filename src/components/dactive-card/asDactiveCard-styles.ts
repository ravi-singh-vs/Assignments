import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  image: ImageStyle
  title: TextStyle
  buttonContainer: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    borderRadius: Spacing.space_16,
    height: Spacing.space_148,
    marginBottom: Spacing.space_20,
    overflow: 'hidden', // to hide overflow of image for setting border radius
  },
  image: {
    height: '100%',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    color: COLORS.secondary[600],
    fontFamily: Typography['secondary'].bold,
    fontSize: Spacing.space_18,
    paddingVertical: Spacing.space_8,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: Spacing.space_12,
  },
})
