import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'
import { fetchData } from '../../services/api/get-data'
import { IDashboardDataType } from '../../types/dashboard-types'

import { DASHBOARD_API_ENDPOINT} from '../../constants/api-constants'


type InitialStateType = {
  dashboardData: IDashboardDataType[]
  loading: boolean
}

const initialState: InitialStateType = {
  dashboardData: [],
  loading: false,
}

export const fetchDashboardData = fetchData('dashboard', DASHBOARD_API_ENDPOINT)

export const dashboardSlice = createSlice({
  name: 'dashboardData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchDashboardData.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchDashboardData.fulfilled, (state, action) => {
      state.loading = false
      state.dashboardData = action.payload
    })
    builder.addCase(fetchDashboardData.rejected, state => {
      state.loading = false
      state.dashboardData = []
    })
  },
})

export const getDashboardData = (state: RootState) => state.dashboardReducer

export default dashboardSlice.reducer
