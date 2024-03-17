import { ImageStyle, StatusBar, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'
import { COLORS } from '../../theme/colors'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  imageBackground: ImageStyle
  image: ImageStyle
  text: TextStyle
  bottomSubContainer: ViewStyle
  textContainer: ViewStyle
  title: TextStyle
  days: TextStyle
  heroImage: ImageStyle
}
export const styles: IStyles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: Spacing.space_248,
    justifyContent: 'space-between',
  },

  container: {
    flex: Spacing.space_1,
    paddingTop: StatusBar.currentHeight,
  },
  subContainer: {
    flexDirection: 'row',
    gap: Spacing.space_12,
    alignItems: 'center',
    padding: Spacing.space_20,
  },
  image: {
    height: Spacing.space_16,
    width: Spacing.space_16,
  },
  text: {
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_14,
    color: COLORS.white,
  },
  bottomSubContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.space_20,
  },
  heroImage: {
    height: Spacing.space_148,
    width: Spacing.space_148,
  },
  title: {
    fontFamily: Typography.secondary.bold,
    color: COLORS.secondary[100],
    fontSize: Spacing.space_24,
  },
  days: {
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_14,
    color: COLORS.white,
  },
  textContainer: {
    marginBottom: Spacing.space_24,
  },
})
