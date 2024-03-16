import { StyleSheet } from 'react-native'
import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'
import { Typography } from '../../theme/typography'
import { palette } from '../../theme/palette'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: Spacing.space_16,
    borderRadius: Spacing.space_16,
    gap: 16,
  },
  detailContainer: {
    flex: Spacing.space_1,
  },
  duration: {
    color: COLORS.neutral['500'],
    fontFamily: Typography.primary.medium,
    fontSize: 12,
    lineHeight: 18,
  },
  headerContainer: {},
  headerSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerSubContainerImage: {
    height: Spacing.space_16,
    width: Spacing.space_16,
  },
  headerSubContainerTitle: {
    flexDirection: 'row',
    gap: Spacing.space_8,
    alignItems: 'center',
  },
  challengeText: {
    fontFamily: Typography.primary.bold,
    color: palette.shark['500'],
  },
  headerSubContainerTitleImage: {
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
  subContainer: {
    flexDirection: 'row',
    gap: Spacing.space_12,
  },
  title: {
    fontSize: Spacing.space_16,
    fontFamily: Typography.secondary.bold,
    color: COLORS.neutral['700'],
    lineHeight: Spacing.space_24,
  },
  bottomSubContainer: {
    elevation: 5,
    borderRadius: Spacing.space_50,
    backgroundColor: COLORS.white,
  },
  bottomSubContainerImage: {
    height: Spacing.space_12,
    width: Spacing.space_12,
    margin: Spacing.space_12,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
