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
  bookmarkIcon: ImageStyle
  challengeText: TextStyle
  tickIcon: ImageStyle
  title: TextStyle
  bottomContainer: ViewStyle
  duration: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    flex: Spacing.space_1,
    justifyContent: 'center',
    padding: Spacing.space_16,
    borderRadius: Spacing.space_16,
    gap: Spacing.space_16,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookmarkIcon: {
    height: Spacing.space_16,
    width: Spacing.space_16,
  },
  headerSubContainerLeft: {
    flexDirection: 'row',
    gap: Spacing.space_8,
    alignItems: 'center',
  },
  challengeText: {
    fontFamily: Typography.primary.bold,
    color: COLORS.neutral['500'],
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.space_8,
    paddingVertical: Spacing.space_16,
  },
  title: {
    fontSize: Spacing.space_16,
    fontFamily: Typography.secondary.bold,
    color: COLORS.neutral['700'],
    lineHeight: Spacing.space_24,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  duration: {
    color: COLORS.neutral['500'],
    fontFamily: Typography.primary.medium,
    fontSize: Spacing.space_12,
    lineHeight: Spacing.space_18,
  },
  bottomSubContainer: {
    elevation: Spacing.space_4,
    shadowColor: COLORS.neutral[600],
    borderRadius: Spacing.space_50,
    backgroundColor: COLORS.white,
  },
  bottomSubContainerImage: {
    height: Spacing.space_12,
    width: Spacing.space_12,
    margin: Spacing.space_12,
  },
})
