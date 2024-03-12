import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {COLORS} from '../../theme/colors';
import {FONT_FAMILY} from '../../theme/typography';
import {SPACING} from '../../theme/spacing';

interface Styles {
  container: ViewStyle;
  subContainer: ViewStyle;
  icon: ImageStyle;
  text: TextStyle;
  timeContainer: ViewStyle;
  timeText: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    borderBottomColor: COLORS.neutral100,
    borderBottomWidth: SPACING.space_1,
    paddingHorizontal: SPACING.space_20,
    paddingVertical: SPACING.space_18,
  },
  subContainer: {
    flexDirection: 'row',
    marginBottom: SPACING.space_4,
  },
  icon: {
    height: SPACING.space_48,
    width: SPACING.space_48,
  },
  text: {
    color: COLORS.black,
    fontFamily: FONT_FAMILY.quickSandMedium,
    fontSize: SPACING.space_14,
    marginHorizontal: SPACING.space_20,
  },
  timeContainer: {
    paddingHorizontal: SPACING.space_76,
  },
  timeText: {
    color: COLORS.neutral600,
    fontFamily: FONT_FAMILY.quickSandMedium,
    fontSize: SPACING.space_12,
  },
});
