import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, Spacing, Typography } from '../../theme'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  paginationContainer: ViewStyle
  title: TextStyle
  subTitle: TextStyle
  buttonContainer: ViewStyle
  button: ViewStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: Spacing.space_1,
    paddingHorizontal: Spacing.space_20,
    paddingVertical: Spacing.space_28,
  },
  subContainer: {
    borderRadius: Spacing.space_10,
    borderColor: COLORS.neutral[10],
    borderWidth: Spacing.space_1,
    padding: Spacing.space_12,
  },
  paginationContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.neutral[400],
    fontFamily: Typography.secondary['semiBold'],
    fontSize: Spacing.space_17,
    lineHeight: Spacing.space_22,
  },
  subTitle: {
    marginTop: Spacing.space_8,
    lineHeight: Spacing.space_18,
    fontSize: Spacing.space_14,
    fontFamily: Typography.secondary['regular'],
  },

  buttonContainer: {
    alignItems: 'center',
    borderColor: COLORS.neutral[10],
    borderRadius: Spacing.space_10,
    borderWidth: Spacing.space_1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.space_4,
    paddingVertical: Spacing.space_14,
  },
  button: {
    marginHorizontal: Spacing.space_10,
  },
})
