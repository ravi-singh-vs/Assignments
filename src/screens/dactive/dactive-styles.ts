import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {FONT_FAMILY} from '../../theme/typography';
import {COLORS} from '../../theme/colors';
import {SPACING} from '../../theme/spacing';

interface Styles {
  header: ViewStyle;
  icon: ImageStyle;
  title: TextStyle;
  container: ViewStyle;
}
export const styles = StyleSheet.create<Styles>({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.space_24,
    paddingVertical: SPACING.space_16,
  },

  icon: {
    height: SPACING.space_24,
    marginHorizontal: SPACING.space_24,
    width: SPACING.space_24,
  },
  title: {
    color: COLORS.neutral700,
    flex: SPACING.space_1,
    fontFamily: FONT_FAMILY.fraunces,
    fontSize: SPACING.space_18,
    textAlign: 'center',
  },
  container: {
    flex: SPACING.space_1,
    justifyContent: 'center',
    paddingHorizontal: SPACING.space_20,
  },
});
