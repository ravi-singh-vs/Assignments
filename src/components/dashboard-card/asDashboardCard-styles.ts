import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  imageContainer: ViewStyle
  image: ImageStyle
  detailContainer: ViewStyle
  headerContainer: ViewStyle
  headerSubContainer: ViewStyle
  headerSubContainerLeft: ViewStyle
  favouriteIcon: ImageStyle
  notFavouriteIcon: ImageStyle
  challengeText: TextStyle
  tickIcon: ImageStyle
  title: TextStyle
  bottomContainer: ViewStyle
  duration: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    borderRadius: Spacing.space_16,
    flex: Spacing.space_1,
    gap: Spacing.space_16,
    justifyContent: 'center',
    padding: Spacing.space_16,
  },
  subContainer: {
    flexDirection: 'row',
    gap: Spacing.space_12,
  },
  detailContainer: {
    flex: Spacing.space_1,
  },
  headerContainer: {
    gap: Spacing.space_4,
  },
  headerSubContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  favouriteIcon: {
    height: Spacing.space_16,
    width: Spacing.space_16,
  },
  notFavouriteIcon: {
    height: Spacing.space_16,
    width: Spacing.space_16,
  },
  headerSubContainerLeft: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: Spacing.space_8,
  },
  challengeText: {
    color: COLORS.neutral['500'],
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_12,
  },
  tickIcon: {
    height: Spacing.space_16,
    width: Spacing.space_16,
  },
  image: {
    height: Spacing.space_40,
    width: Spacing.space_52,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.space_8,
    paddingVertical: Spacing.space_16,
  },
  title: {
    color: COLORS.neutral['700'],
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_24,
  },
  bottomContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  duration: {
    color: COLORS.neutral['500'],
    fontFamily: Typography.primary.medium,
    fontSize: Spacing.space_12,
    lineHeight: Spacing.space_18,
  },
  bottomSubContainer: {
    backgroundColor: COLORS.white,
    borderRadius: Spacing.space_50,
    elevation: Spacing.space_4,
    shadowColor: COLORS.neutral[600],
  },
  bottomSubContainerImage: {
    height: Spacing.space_12,
    margin: Spacing.space_12,
    width: Spacing.space_12,
  },
})
