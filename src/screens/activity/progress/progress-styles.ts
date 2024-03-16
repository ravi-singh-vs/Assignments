import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Typography } from '../../../theme/typography'
import { Spacing } from '../../../theme/spacing'
import { COLORS } from '../../../theme/colors'

import { ResizeMode } from '../../../constants/common-constants'

interface IStyles {
  container: ViewStyle
  imageContainer: ViewStyle
  image: ImageStyle
  button: ViewStyle
  text: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    paddingHorizontal: Spacing.space_20,
    marginTop: Spacing.space_32,
  },
  imageContainer: {
    borderRadius: Spacing.space_16,
    height: Spacing.space_148,
    marginTop: Spacing.space_32,
  },
  image: {
    borderRadius: Spacing.space_16,
    height: '100%',
    resizeMode: ResizeMode.Cover,
    width: '100%',
  },
  button: {
    backgroundColor: COLORS.white,
    borderRadius: Spacing.space_8,
    bottom: Spacing.space_20,
    paddingHorizontal: Spacing.space_16,
    paddingVertical: Spacing.space_12,
    position: 'absolute',
    right: Spacing.space_16,
  },
  text: {
    fontSize: Spacing.space_12,
    fontFamily: Typography['primary'].semiBold,
  },
})
