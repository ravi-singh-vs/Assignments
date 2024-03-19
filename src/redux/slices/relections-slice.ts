import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'
import { fetchData } from '../../services/api/get-data'
import { IReflectionDataType } from '../../types/reflection-types'

import { REFLECTION_API_ENDPOINT } from '../../constants/api-constants'

type InitialStateType = {
  reflectionData: IReflectionDataType[]
  loading: boolean
}

const initialState: InitialStateType = {
  reflectionData: [],
  loading: false,
}

export const fetchReflectionData = fetchData('reflection', REFLECTION_API_ENDPOINT)

export const reflectionsSlice = createSlice({
  name: 'reflectionData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchReflectionData.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchReflectionData.fulfilled, (state, action) => {
      state.loading = false
      state.reflectionData = action.payload
    })
    builder.addCase(fetchReflectionData.rejected, state => {
      state.loading = false
      state.reflectionData = []
    })
  },
})

export const getReflectionData = (state: RootState) => state.reflectionsReducer

export default reflectionsSlice.reducer
