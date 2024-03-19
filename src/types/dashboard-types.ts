export interface IDashboardDataType {
  id: number
  title: string
  startingTime: string
  endingTime: string
  isCompleted: string
  isFav: string
}

export interface IDashboardCardInfoType {
  [key: string]: {
    image: number
    backgroundColor: string
  }
}
