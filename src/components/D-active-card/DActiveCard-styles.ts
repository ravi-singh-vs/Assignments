import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import {COLORS,FONT_FAMILY,} from '../../theme/theme';

interface Styles {
  container : ViewStyle;
  image : ImageStyle;
  title : TextStyle;
  btnContainer : ViewStyle;
  button : TextStyle;
  androidShadow: ViewStyle
  iosShadow: ViewStyle
}
export const styles = StyleSheet.create<Styles>({
container : {
    height : 148,
    backgroundColor :'plum',
    marginBottom : 20,
    borderRadius : 16,
    overflow :'hidden'
  },
  image : {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent  : 'space-between',
  },
  title :{
    paddingVertical : 8,
    textAlign : 'center',
    color : COLORS.secondary600,
    fontFamily : FONT_FAMILY.fraunces,
    fontSize : 18,    
  },
  
  btnContainer : {
    flexDirection : 'row',
    paddingVertical : 12,
    justifyContent : 'space-evenly',
  },

  button : {
    color : COLORS.neutral700,
    fontFamily : FONT_FAMILY.quickSandMedium,
    paddingVertical : 12,
    paddingHorizontal : 16,
    backgroundColor: COLORS.neutralWhite,
    borderRadius: 8, 
    overflow: 'hidden',
    width : 93,
    textAlign : 'center'
  },
  androidShadow: {
    elevation: 4,
  },
  iosShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
})