import { ImageSourcePropType } from "react-native"

export interface IProfileNavigationProps {
    title: string
    arrowRight: ImageSourcePropType
    setShowWebView: (value: boolean) => void
  }