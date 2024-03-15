import { StyleSheet } from 'react-native'
import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'
import { Typography } from '../../theme/typography'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: Spacing.space_24,
    paddingHorizontal: Spacing.space_36,
    gap: Spacing.space_16,
    backgroundColor: COLORS.primary[50],
  },
  image: {
    height: Spacing.space_72,
    width: Spacing.space_72,
  },
  detailContainer: {
    flex: Spacing.space_1,
  },
  detailTopContainer: {
    gap: Spacing.space_4,
  },
  listenIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listenContainer: {
    flexDirection: 'row',
    gap: Spacing.space_8,
  },
  title: {
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_16,
  },
  icon: {
    height: Spacing.space_16,
    width: Spacing.space_16,
  },
  detailBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'blue',
    alignItems: 'center',
  },
  time: {
    fontFamily: Typography.primary.medium,
    fontSize: Spacing.space_12,
  },
  listenText: {
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_12,
  },
  imageContainer: {
    justifyContent: 'flex-end',
    backgroundColor: COLORS.primary[100],
    borderRadius: Spacing.space_8,
  },
})
