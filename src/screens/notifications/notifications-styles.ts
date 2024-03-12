import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../theme/colors';
import {FONT_FAMILY} from '../../theme/typography';
import {SPACING} from '../../theme/spacing';

interface Styles {
  header: ViewStyle;
  icon: ImageStyle;
  title: TextStyle;
  container: ViewStyle;
  subContainer: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  header: {
    alignItems: 'center',
    backgroundColor: COLORS.neutralWhite,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.space_16,
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
    justifyContent: 'center',
    flex: SPACING.space_1,
  },
  subContainer: {
    flexGrow: SPACING.space_1,
  },
});
