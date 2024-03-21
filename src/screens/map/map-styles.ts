import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, Spacing, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  mapImage: ImageStyle
  affectedAreasContainer: ViewStyle
  text: TextStyle
  leastAffectedIndicator: ViewStyle
  mostAffectedIndicator: ViewStyle
  affectedLabel: TextStyle
  indicatorContainer: ViewStyle
  subContainer: ViewStyle
  topCountriesContainer: ViewStyle
  title: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    flex: Spacing.space_1,
    marginBottom: Spacing.space_70,
    paddingHorizontal: Spacing.space_16,
    paddingTop: Spacing.space_24,
  },
  mapImage: {
    alignItems: 'center',
    borderColor: COLORS.neutral['10'],
    borderRadius: Spacing.space_10,
    borderWidth: Spacing.space_1,
    justifyContent: 'center',
    marginTop: Spacing.space_28,
  },
  affectedAreasContainer: {
    borderColor: COLORS.neutral['10'],
    borderRadius: Spacing.space_10,
    borderWidth: Spacing.space_1,
    paddingHorizontal: Spacing.space_10,
    paddingVertical: Spacing.space_16,
  },
  text: {
    color: COLORS.neutral[400],
    fontFamily: Typography.secondary.semiBold,
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_22,
    marginBottom: Spacing.space_8,
    textAlign: 'left',
  },
  leastAffectedIndicator: {
    backgroundColor: COLORS.primary[50],
    height: Spacing.space_12,
    width: Spacing.space_12,
  },
  mostAffectedIndicator: {
    backgroundColor: COLORS.primary[50],
    height: Spacing.space_12,
    width: Spacing.space_12,
  },
  affectedLabel: {
    color: COLORS.neutral[100],
    fontFamily: Typography.secondary['regular'],
    fontSize: Spacing.space_12,
    lineHeight: Spacing.space_18,
  },
  indicatorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: Spacing.space_12,
    justifyContent: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    gap: Spacing.space_22,
    justifyContent: 'flex-start',
  },
  topCountriesContainer: {
    borderColor: COLORS.neutral['10'],
    borderRadius: Spacing.space_10,
    borderWidth: Spacing.space_1,
    marginTop: Spacing.space_24,
    paddingHorizontal: Spacing.space_10,
    paddingVertical: Spacing.space_16,
  },
  title: {
    color: COLORS.neutral[500],
    fontFamily: Typography.secondary['semiBold'],
    fontSize: Spacing.space_17,
    lineHeight: Spacing.space_22,
    marginBottom: Spacing.space_16,
  },
})
