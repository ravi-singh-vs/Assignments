import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {FONT_FAMILY} from '../../theme/typography';
import {SPACING} from '../../theme/spacing';

interface Styles {
  container: ViewStyle;
  subContainer: ViewStyle;
  icon: ImageStyle;
  text: TextStyle;
  subText: TextStyle;
}
export const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: 'center',
    flex: SPACING.space_1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subContainer: {
    justifyContent: 'center',
    marginHorizontal: SPACING.space_20,
  },
  icon: {
    alignSelf: 'center',
    height: SPACING.space_154,
    marginHorizontal: 'auto',
    width: SPACING.space_154,
  },
  text: {
    fontFamily: FONT_FAMILY.fraunces,
    fontSize: SPACING.space_28,
    textAlign: 'center',
  },
  subText: {
    fontFamily: FONT_FAMILY.quickSandMedium,
    fontSize: SPACING.space_16,
    textAlign: 'center',
  },
});
