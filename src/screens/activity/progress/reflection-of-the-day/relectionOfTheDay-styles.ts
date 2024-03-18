import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import { COLORS } from '../../../../theme/colors'
import { Spacing } from '../../../../theme/spacing'

interface IStyles {
  bottomBar1: ViewStyle
  bottomBar2: ViewStyle
  bottomBar: ViewStyle
  container: ViewStyle
  questionBarContainer: ViewStyle
  questionNumberText: TextStyle
  subContainer: ViewStyle
}
export const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: COLORS.primary[600],
    flex: Spacing.space_1,
  },
  subContainer: {
    flex: Spacing.space_1,
    paddingHorizontal: Spacing.space_20,
  },
  questionBarContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.primary[600],
    padding: Spacing.space_10,
  },
  questionNumberText: {
    color: COLORS.white,
    marginBottom: Spacing.space_12,
  },
  bottomBar: {
    borderTopRightRadius: Spacing.space_4,
    borderTopLeftRadius: Spacing.space_4,
    borderBottomLeftRadius: Spacing.space_8,
    borderBottomRightRadius: Spacing.space_8,
    height: Spacing.space_16,
  },
  bottomBar1: {
    backgroundColor: COLORS.primary[300],
    marginHorizontal: Spacing.space_12,
  },
  bottomBar2: {
    backgroundColor: COLORS.primary[500],
    marginHorizontal: Spacing.space_20,
  },
})
