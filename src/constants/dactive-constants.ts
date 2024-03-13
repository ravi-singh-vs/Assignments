import { COLORS } from '../theme/colors'
import { IDActiveCardInfoType } from '../types/dactive-types'

export const DACTIVE_CARD_INFO: { [key: string]: IDActiveCardInfoType } = {
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

export const DACTIVE_CARD_TITLE_GRADIENT_LOCATIONS: number[] = [0, 0.8792, 1]

export const DACTIVE_CARD_BUTTON_CONTAINER_GRADIENT_START: { x: number; y: number } = {
  x: 0.5,
  y: 0,
}
export const DACTIVE_CARD_BUTTON_CONTAINER_GRADIENT_END: { x: number; y: number } = {
  x: 0.5,
  y: 1,
}

export const DACTIVE_CARD_BUTTON_TIME_DATA: number[] = [2, 4, 8]
