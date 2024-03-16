import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'
import { COLORS } from '../../theme/colors'

import { ResizeMode } from '../../constants/common-constants'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  image: ImageStyle
  title: TextStyle
  detailContainer: ViewStyle
  text: TextStyle
  chart: ImageStyle
  button: ViewStyle
  buttonImage: ImageStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: COLORS.primary[100],
    borderBottomWidth: 1,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: Spacing.space_48,
    height: Spacing.space_48,
    resizeMode : ResizeMode.Contain,
    borderRadius: 100,
  },
  title: {
    fontFamily: Typography['primary'].bold,
    fontSize: Spacing.space_14,
    marginLeft: 13,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: Typography['secondary'].bold,
  },
  chart: {
    marginLeft: Spacing.space_8,
    marginRight: Spacing.space_16,
  },
  button: {
    width: Spacing.space_16,
    height: Spacing.space_16,
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    resizeMode: ResizeMode.Contain,
  },
})
