import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {COLORS} from '../../theme/colors';
import {FONT_FAMILY} from '../../theme/typography';
import {SPACING} from '../../theme/spacing';

interface Styles {
  container: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  btnContainer: ViewStyle;
  button: TextStyle;
}
export const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: 'plum',
    borderRadius: SPACING.space_16,
    height: SPACING.space_148,
    marginBottom: SPACING.space_20,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    justifyContent: 'space-between',
    resizeMode: 'cover',
    width: '100%',
  },
  title: {
    color: COLORS.secondary600,
    fontFamily: FONT_FAMILY.fraunces,
    fontSize: SPACING.space_18,
    paddingVertical: SPACING.space_8,
    textAlign: 'center',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: SPACING.space_12,
  },

  button: {
    backgroundColor: COLORS.neutralWhite,
    borderRadius: SPACING.space_8,
    color: COLORS.neutral700,
    elevation: SPACING.space_8,
    fontFamily: FONT_FAMILY.quickSandMedium,
    overflow: 'hidden',
    paddingHorizontal: SPACING.space_16,
    paddingVertical: SPACING.space_12,
    shadowColor: COLORS.tundora,
    textAlign: 'center',
    width: SPACING.space_93,
  },
});
