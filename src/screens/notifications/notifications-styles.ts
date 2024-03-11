import {
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {COLORS, FONT_FAMILY, } from '../../theme/theme';

interface Styles {
  header: ViewStyle;
  icon: ImageStyle;
  title: TextStyle;
  container: ViewStyle;
  listContainer: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    marginBottom: 16,
    backgroundColor : COLORS.neutralWhite
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 24,
  },
  title: {
    fontFamily: FONT_FAMILY.fraunces,
    fontSize: 18,
    color: COLORS.neutral700,
    flex: 1,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent : 'center',
  },
  listContainer: {
    flexGrow:1,
  },
});
