import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Typography } from '../../../theme/typography'
import { Spacing } from '../../../theme/spacing'
import { COLORS } from '../../../theme/colors'

interface IStyles {
  button: ViewStyle
  container: ViewStyle
  image: ImageStyle
  imageContainer: ViewStyle
  label: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    flex: Spacing.space_1,
    gap: Spacing.space_32,
    marginTop: Spacing.space_32,
    paddingHorizontal: Spacing.space_20,
  },
  imageContainer: {
    borderRadius: Spacing.space_16,
    height: Spacing.space_148,
    marginBottom: Spacing.space_40,
    overflow: 'hidden',
  },
  image: {
    borderRadius: Spacing.space_16,
    height: '100%',
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
  label: {
    color: COLORS.neutral[700],
    fontFamily: Typography['primary'].semiBold,
    fontSize: Spacing.space_12,
    lineHeight: Spacing.space_18,
  },
})
