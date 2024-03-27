export interface ICovidDataType {
  country: string
  active: number
  recovered: number
  cases: number
  countryInfo: {
    flag: string
  }
  population: number
}
