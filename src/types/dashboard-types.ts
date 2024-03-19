import { DASHBOARD_HEADER_DATA, DASHBOARD_CARD_INFO } from '../constants/dashboard-constants'

export interface IDashboardDataType {
  id: number
  title: string
  startingTime: string
  endingTime: string
  isCompleted : string
  isFav : string
}

export interface IDashboardCardInfoType {
  [key: string]: {
    image: number
    backgroundColor: string
  }
}
// export type TDashboardCardTitle = keyof typeof DASHBOARD_CARD_INFO

