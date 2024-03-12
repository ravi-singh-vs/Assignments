import {COLORS} from '../theme/colors';

export const DactiveCardImageSource: {[key: string]: number} = {
  'Outer Ring': require('../assets/images/outer-ring.png'),
  Focus: require('../assets/images/focus.png'),
  Follow: require('../assets/images/follow.png'),
  Scan: require('../assets/images/scan.png'),
  Square: require('../assets/images/square.png'),
};

export const buttonTimeData: number[] = [2, 4, 8];

export const DactiveCardTitleColor: {[key: string]: string} = {
  'Outer Ring': COLORS.secondary600,
  Focus: COLORS.primary700,
  Follow: COLORS.neutral700,
  Scan: COLORS.accent700,
  Square: COLORS.primary700,
};

export const buttonContainerGradientColors = ['#FFFFFF00', '#FFFFFFCC'];
export const textGradientColors = ['#FFFFFF8F', '#FFFFFF1E', '#FFFFFF00'];
