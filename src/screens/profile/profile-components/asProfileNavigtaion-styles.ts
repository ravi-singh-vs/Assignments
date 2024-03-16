import { StyleSheet } from "react-native";
import { COLORS } from "../../../theme/colors";
import { Spacing } from "../../../theme/spacing";
import { Typography } from "../../../theme/typography";

export const styles = StyleSheet.create({
    container: {
      borderBottomWidth: 0.7,
      borderColor: COLORS.primary['100'],
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: Spacing.space_8,
      paddingVertical: Spacing.space_20,
    },
    icon: {
      height: Spacing.space_16,
      width: Spacing.space_16,
    },
    text: {
      color: COLORS.neutral['700'],
      fontFamily: Typography.primary['bold'],
      fontSize: Spacing.space_16,
      lineHeight: Spacing.space_24,
    },
  })