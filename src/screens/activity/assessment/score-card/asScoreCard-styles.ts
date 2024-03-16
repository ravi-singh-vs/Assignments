import { StyleSheet } from "react-native";
import { Spacing } from "../../../../theme/spacing";
import { Typography } from "../../../../theme/typography";

export const styles = StyleSheet.create({
    container: {
      gap: Spacing.space_8,
      marginHorizontal: Spacing.space_24,
    },
    subContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    iconContainer: {
      alignItems: 'center',
    },
    scoreContainer:{ 
      alignItems: 'center',
      justifyContent: 'space-between' 
    },
    icon: {
      height: Spacing.space_40,
      width: Spacing.space_40,
    },
    text: {
      fontFamily: Typography.secondary['bold'],
      fontSize: Spacing.space_16,
      lineHeight: Spacing.space_20,
      paddingVertical: Spacing.space_4,
    },
    scoreText: {
      fontFamily: Typography.primary['bold'],
      fontSize: Spacing.space_32,
      lineHeight: Spacing.space_48,
      marginBottom: Spacing.space_4,
    }
  })