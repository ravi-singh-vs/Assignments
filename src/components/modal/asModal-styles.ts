import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS, Spacing, Typography } from '../../theme'

interface IStyles {
  overlay: ViewStyle
  container: ViewStyle
  text: TextStyle
  buttonContainer: ViewStyle
  button: ViewStyle
  label: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  overlay: {
    backgroundColor: COLORS.modalOverlay,
    flex: Spacing.space_1,
  },
  container: {
    alignItems: 'center',
    padding: Spacing.space_30,
    backgroundColor: COLORS.white,
    borderRadius: Spacing.space_24,
    height: Spacing.space_200,
    left: '15%',
    justifyContent: 'space-around',
    position: 'absolute',
    top: '30%',
  },
  text: {
    fontFamily: Typography.primary['medium'],
    fontSize: Spacing.space_20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    paddingHorizontal: Spacing.space_20,
    paddingVertical: Spacing.space_10,
    marginHorizontal: Spacing.space_10,
    backgroundColor: COLORS.primary[50],
    borderRadius : Spacing.space_10
  },
  label: {
    fontFamily: Typography.primary['bold'],
    fontSize: Spacing.space_16,
    textAlign: 'center',
    color: COLORS.white,
  },
})
