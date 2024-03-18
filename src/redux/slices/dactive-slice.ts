import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'
import { fetchData } from '../../services/api/get-data'
import { IDactiveDataType } from '../../types/dactive-types'

import { DACTIVE_API_ENDPOINT } from '../../constants/api-constants'

type InitialStateType = {
  dactiveData: IDactiveDataType[]
  loading: boolean
}

const initialState: InitialStateType = {
  dactiveData: [],
  loading: false,
}

export const fetchDactiveData = fetchData('dactive', DACTIVE_API_ENDPOINT)

export const dactiveSlice = createSlice({
  name: 'dactiveData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchDactiveData.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchDactiveData.fulfilled, (state, action) => {
      state.loading = false
      state.dactiveData = action.payload
    })
    builder.addCase(fetchDactiveData.rejected, state => {
      state.loading = false
      state.dactiveData = []
    })
  },
})

export const getDactiveData = (state: RootState) => state.dactiveReducer

export default dactiveSlice.reducer
