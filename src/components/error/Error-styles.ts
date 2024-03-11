import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { COLORS } from "../../theme/theme";


interface Styles {
    container: ViewStyle;
    text: TextStyle;
  }
  
export const styles = StyleSheet.create<Styles>({
    container : {
        backgroundColor : COLORS.primary700,
        paddingVertical : 30,
        paddingHorizontal : 20,
        margin : 10,
        borderRadius : 10
    },
    text : {
        fontSize : 20,
        textAlign :'center',
        color : COLORS.neutralWhite
    }
})