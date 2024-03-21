import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'

import { COVID_DATA_BASE_URL } from '../../constants'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { ICovidDataType } from '../../types'

interface InitialStateType {
  covidData:any
  loading: boolean
  isError: boolean
}

const initialState: InitialStateType = {
  covidData: [],
  loading: false,
  isError: false,
}

export const fetchCovidData = createAsyncThunk(`fetch/covidData`, async () => {
  try {
    const response = await fetch(COVID_DATA_BASE_URL)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error', error)
    return []
  }
})

const covidDataSlice = createSlice({
  name: 'covidData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCovidData.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchCovidData.fulfilled, (state, action) => {
      state.loading = false
      state.covidData = action.payload
    })
    builder.addCase(fetchCovidData.rejected, state => {
      state.loading = false
      state.isError = true
      state.covidData = []
    })
  },
})

export const getCovidData = (state: RootState) => state.covidDataReducer;

export const covidDataReducer = covidDataSlice.reducer
