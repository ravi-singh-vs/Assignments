import { COLORS } from '../theme/colors'

interface DActiveCardInfoType {
  imageSource: number
  textColor: string
}
export const dactiveCardInfo: { [key: string]: DActiveCardInfoType } = {
  'Outer Ring': {
    imageSource: require('../assets/images/outer-ring.png'),
    textColor: COLORS.secondary[600],
  },
  'Focus': {
    imageSource: require('../assets/images/focus.png'),
    textColor: COLORS.primary[700],
  },
  'Follow': {
    imageSource: require('../assets/images/follow.png'),
    textColor: COLORS.neutral[600],
  },
  'Scan': {
    imageSource: require('../assets/images/scan.png'),
    textColor: COLORS.accent[700],
  },
  'Square': {
    imageSource: require('../assets/images/square.png'),
    textColor: COLORS.primary[700],
  },
}

export const dactiveCardTitleGradientLocations: number[] = [0, 0.8792, 1]

export const dactiveCardButtonContainerGradientStart: { x: number; y: number } = {
  x: 0.5,
  y: 0,
}
export const dactiveCardButtonContainerGradientEnd: { x: number; y: number } = {
  x: 0.5,
  y: 1,
}

export const dactiveCardButtonTimeData: number[] = [2, 4, 8]
