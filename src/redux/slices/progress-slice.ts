import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'
import { fetchData } from '../../services/api/get-data'
import { IProgressDataType } from '../../types/activity-types'

import { PROGRESS_API_ENDPOINT } from '../../constants/api-constants'

type InitialStateType = {
  progressData: IProgressDataType[]
  loading: boolean
}

const initialState: InitialStateType = {
  progressData: [],
  loading: false,
}

export const fetchProgressData = fetchData('progress', PROGRESS_API_ENDPOINT)

export const progressSlice = createSlice({
  name: 'progressData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProgressData.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchProgressData.fulfilled, (state, action) => {
      state.loading = false
      state.progressData = action.payload
    })
    builder.addCase(fetchProgressData.rejected, state => {
      state.loading = false
      state.progressData = []
    })
  },
})

export const getProgressData = (state: RootState) => state.progressReducer

export default progressSlice.reducer
