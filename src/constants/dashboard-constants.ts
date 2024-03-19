import { COLORS } from '../theme/colors'
import { IDashboardCardInfoType } from '../types/dashboard-types'

export const DASHBOARD_CARD_INFO: IDashboardCardInfoType = {
  'D-active': {
    image: require('../assets/icons/dactive.png'),
    backgroundColor: COLORS.secondary[100],
  },
  'Reminder of the day': {
    image: require('../assets/icons/reminder.png'),
    backgroundColor: COLORS.accent[100],
  },
  'Reflection of the day': {
    image: require('../assets/icons/reflection.png'),
    backgroundColor: COLORS.primary[100],
  },
}

export const DASHBOARD_HEADER_DATA: { [key: string]: number } = {
  Overthinker: require('../assets/icons/overthinker-white.png'),
  Pessimist: require('../assets/icons/pessimist-white.png'),
  Distractor: require('../assets/icons/distractor-white.png'),
}

export const dashboardBackgroundImage = require('../assets/images/dashboard-background.png')

export const overthinkerImage = require('../assets/icons/overthinker-grey.png')
