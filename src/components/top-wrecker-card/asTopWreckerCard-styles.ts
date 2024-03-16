import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";

export const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    icon: {
      backgroundColor: COLORS.white,
      borderRadius: Spacing.space_48,
      height: Spacing.space_76,
      width: Spacing.space_76,
    },
    text: {
      color: COLORS.white,
      fontSize: Spacing.space_14,
      lineHeight: Spacing.space_32,
    },
  })