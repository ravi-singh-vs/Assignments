import React from "react"
import { SvgProps } from "react-native-svg"

export interface onBoardingScreenDataType {
  id: number
  title: string
  description: string,
  image : React.FC<SvgProps>
}
