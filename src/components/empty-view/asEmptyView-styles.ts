import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Typography } from '../../theme/typography'
import { Spacing } from '../../theme/spacing'

interface Styles {
  container: ViewStyle
  subContainer: ViewStyle
  image: ImageStyle
  text: TextStyle
  subText: TextStyle
}

export const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: 'center',
    flex: Spacing.space_1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subContainer: {
    justifyContent: 'center',
    marginHorizontal: Spacing.space_20,
  },
  image: {
    alignSelf: 'center',
    height: Spacing.space_154,
    marginHorizontal: 'auto',
    width: Spacing.space_154,
  },
  text: {
    fontFamily: Typography['secondary'].bold,
    fontSize: Spacing.space_28,
    textAlign: 'center',
  },
  subText: {
    fontFamily: Typography['primary'].medium,
    fontSize: Spacing.space_16,
    textAlign: 'center',
  },
})
