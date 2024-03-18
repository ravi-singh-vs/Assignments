import { Platform } from 'react-native'

export enum ResizeMode {
  Cover = 'cover',
  Contain = 'contain',
  Stretch = 'stretch',
  Repeat = 'repeat',
  Center = 'center',
}

export const SECONDS_IN_MINUTE: number = 60
export const SECONDS_IN_HOUR: number = SECONDS_IN_MINUTE * 60
export const SECONDS_IN_DAY: number = SECONDS_IN_HOUR * 24
export const SECONDS_IN_WEEK: number = SECONDS_IN_DAY * 7
export const SECONDS_IN_MONTH: number = SECONDS_IN_WEEK * 4
export const SECONDS_IN_YEAR: number = SECONDS_IN_MONTH * 12

export const nextButtonIcon = require('../assets/icons/next.png')
export const whiteBackButtonIcon = require('../assets/icons/arrow-left-white.png')
export const greenBackButtonIcon = require('../assets/icons/arrow-left-green.png')
export const completedTickIcon = require('../assets/icons/complete.png')
export const favouriteIcon = require('../assets/icons/marked-favourite.png')
export const notFavouriteIcon = require('../assets/icons/not-marked-favourite.png')
export const calendarIcon = require('../assets/icons/calendar.png')
export const playButtonIcon = require('../assets/icons/audio.png')
