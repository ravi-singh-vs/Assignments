import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import {COLORS,FONT_FAMILY} from '../../theme/theme';

interface Styles {
    container : ViewStyle;
    subContainer : ViewStyle;
    icon : ImageStyle;
    text : TextStyle;
    timeContainer : ViewStyle;
    timeText : TextStyle;
  }
  
export const styles = StyleSheet.create<Styles>({
    container : {
        paddingHorizontal: 20,
        paddingVertical :18,
        borderBottomColor : COLORS.neutral100,
        borderBottomWidth: 1
    },
    subContainer : {
        flexDirection : 'row',
        marginBottom : 4,
    },
    icon : {
        width : 48,
        height : 48,
    },
    text : {
        marginHorizontal : 20,
        color: COLORS.black,
        fontSize : 14,
        fontFamily : FONT_FAMILY.quickSandMedium
    },
    timeContainer : {
        paddingHorizontal : 76,
    }, 
    timeText: {
        color : COLORS.neutral600,
        fontSize:12,
        fontFamily : FONT_FAMILY.quickSandMedium
    }
})