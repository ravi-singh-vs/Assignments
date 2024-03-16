import { StyleSheet } from "react-native";
import { Spacing } from "../../theme/spacing";
import {COLORS} from '../../theme/colors'
import { Typography } from "../../theme/typography";

export const styles = StyleSheet.create({
    overlay: {
      backgroundColor: '#00000066',
      flex: Spacing.space_1,
    },
    container: {
      alignItems: 'center',
      backgroundColor: COLORS.white,
      borderRadius: Spacing.space_24,
      height: 450,
      justifyContent: 'center',
      left: Spacing.space_38,
      position: 'absolute',
      top: Spacing.space_148,
      width: 325,
    },
    title: {
      color: COLORS.neutral['700'],
      fontFamily: Typography.secondary['bold'],
      fontSize: Spacing.space_24,
      lineHeight: Spacing.space_32,
      marginBottom: Spacing.space_9,
      textAlign: 'center',
    },
    message: {
      color: COLORS.neutral['700'],
      fontFamily: Typography.primary['medium'],
      fontSize: Spacing.space_14,
      lineHeight: Spacing.space_14,
      textAlign: 'center',
    },
    percentageText: {
      color: COLORS.neutral['700'],
      fontFamily: Typography.secondary['bold'],
      fontSize: Spacing.space_14,
      lineHeight: Spacing.space_22,
    },
    subContainer: {
      justifyContent: 'space-between',
      paddingVertical: Spacing.space_12,
    },
    wreckerContainer: {
      marginHorizontal:Spacing.space_9,
      paddingVertical: Spacing.space_8,
    },
    loadingContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginHorizontal: Spacing.space_90,
    },
    icon: {
      height: '50%',
      width: Spacing.space_200,
    },
  })
  