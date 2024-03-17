import { DASHBOARD_HEADER_DATA, DASHBOARD_LIST_DATA } from '../constants/dashboard-constants'

export interface IDashboardData {
  id: number
  title: string
  startingTime: string
  endingTime: string
}

export type TDashboardCardTitle = keyof typeof DASHBOARD_LIST_DATA

export type TDashboardHeader = keyof typeof DASHBOARD_HEADER_DATA
