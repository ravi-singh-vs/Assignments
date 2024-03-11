import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import {FONT_FAMILY} from '../../theme/theme';

interface Styles {
    container : ViewStyle;
    subContainer : ViewStyle;
    icon : ImageStyle;
    text : TextStyle;
    subText : TextStyle;
}
export const styles = StyleSheet.create<Styles>({
    container : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center'
    },
    subContainer : {
        marginHorizontal: 20,
        justifyContent : 'center',
     },
    icon : {
        width : 154,
        height : 154,
        marginHorizontal :'auto',
        alignSelf :'center'
    },
    text : {
        fontSize :  28,
        fontFamily : FONT_FAMILY.fraunces,
        textAlign : 'center'
    } ,
    subText : {
      fontSize : 16,
      fontFamily : FONT_FAMILY.quickSandMedium,
      textAlign : 'center'
    }
  })