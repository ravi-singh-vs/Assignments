import { ImageStyle, StatusBar, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'
import { COLORS } from '../../theme/colors'

interface IStyles {
  bottomSubContainer: ViewStyle
  container: ViewStyle
  days: TextStyle
  heroImage: ImageStyle
  image: ImageStyle
  imageBackground: ImageStyle
  subContainer: ViewStyle
  text: TextStyle
  textContainer: ViewStyle
  title: TextStyle
}
export const styles = StyleSheet.create<IStyles>({
  imageBackground: {
    height: Spacing.space_248,
    justifyContent: 'space-between',
    width: '100%',
  },

  container: {
    flex: Spacing.space_1,
    paddingTop: StatusBar.currentHeight,
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: Spacing.space_12,
    padding: Spacing.space_20,
  },
  image: {
    height: Spacing.space_16,
    width: Spacing.space_16,
  },
  text: {
    color: COLORS.white,
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_14,
  },
  bottomSubContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.space_20,
  },
  heroImage: {
    height: Spacing.space_148,
    width: Spacing.space_148,
  },
  title: {
    color: COLORS.secondary[100],
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_24,
  },
  days: {
    color: COLORS.white,
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_14,
  },
  textContainer: {
    marginBottom: Spacing.space_24,
  },
})
