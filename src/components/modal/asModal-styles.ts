import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  icon: ImageStyle
  loadingContainer: ViewStyle
  message: TextStyle
  overlay: ViewStyle
  percentageText: TextStyle
  progressBar: ViewStyle
  subContainer: ViewStyle
  title: TextStyle
  wreckerContainer: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  overlay: {
    backgroundColor: COLORS.modalOverlay,
    flex: Spacing.space_1,
  },
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: Spacing.space_24,
    height: Spacing.space_450,
    justifyContent: 'center',
    left: Spacing.space_38,
    position: 'absolute',
    top: Spacing.space_148,
    width: Spacing.space_325,
  },
  subContainer: {
    justifyContent: 'space-between',
    paddingVertical: Spacing.space_9,
  },
  wreckerContainer: {
    marginHorizontal: Spacing.space_9,
    paddingVertical: Spacing.space_9,
  },
  loadingContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Spacing.space_8,
  },
  title: {
    color: COLORS.neutral['700'],
    fontFamily: Typography.secondary['bold'],
    fontSize: Spacing.space_24,
    lineHeight: Spacing.space_32,
    marginBottom: Spacing.space_9,
    textAlign: 'center',
  },
  message: {
    color: COLORS.neutral['700'],
    fontFamily: Typography.primary['medium'],
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_16,
    textAlign: 'center',
  },
  percentageText: {
    color: COLORS.neutral['700'],
    fontFamily: Typography.secondary['bold'],
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_22,
  },
  icon: {
    height: '50%',
    width: Spacing.space_200,
  },
  progressBar: {
    backgroundColor: COLORS.secondary[300],
  },
})
