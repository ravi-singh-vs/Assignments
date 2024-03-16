import { StyleSheet } from 'react-native'
import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

export const styles = StyleSheet.create({
    background: {
      paddingBottom: Spacing.space_24,
      width: '100%',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 40,
      paddingVertical: Spacing.space_8,
      },
    container: {
      marginHorizontal: Spacing.space_20,
      marginTop: Spacing.space_28,
    },
    icon: {
      height: Spacing.space_24,
      width: Spacing.space_24,
    },
    text: {
      color: COLORS.white,
      fontFamily: Typography.secondary['bold'],
      fontSize: Spacing.space_18,
      lineHeight: Spacing.space_24,
      marginRight:Spacing.space_48,
      paddingHorizontal: Spacing.space_76,
    },
    infoContainer: {
      marginLeft: Spacing.space_24,
      marginTop: Spacing.space_48,
    },
    name: {
      color: COLORS.white,
      fontFamily: Typography.primary['bold'],
      fontSize: Spacing.space_16,
      lineHeight: Spacing.space_28,
    },
    data: {
      color: COLORS.white,
      fontFamily: 'Quicksand-medium',
      fontSize: Spacing.space_14,
      lineHeight: Spacing.space_24,
    },
  })
  
