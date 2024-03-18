import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'
import { fetchData } from '../../services/api/get-data'
import { INotificationDataType } from '../../types/notification-types'

import { NOTIFICATIONS_API_ENDPOINT } from '../../constants/api-constants'

type InitialStateType = {
  notificationsData: INotificationDataType[]
  loading: boolean
}

const initialState: InitialStateType = {
  notificationsData: [],
  loading: false,
}

export const fetchNotifications = fetchData('notifications', NOTIFICATIONS_API_ENDPOINT)

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchNotifications.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.loading = false
      state.notificationsData = action.payload
    })
    builder.addCase(fetchNotifications.rejected, state => {
      state.loading = false
      state.notificationsData = []
    })
  },
})

export const getNotifications = (state: RootState) => state.notificationsReducer

export default notificationsSlice.reducer
