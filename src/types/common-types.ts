export interface ICountryInfoType {
  _id: number
  iso2: string
  iso3: string
  lat: number
  long: number
  flag: string
}

export interface ICovidDataType {
  country: string
  active: number
  recovered: number
  cases: number
  countryInfo: ICountryInfoType
  population : number;
}
