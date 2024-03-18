import { configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

import notificationsReducer from './slices/notifications-slice'
import dactiveReducer from './slices/dactive-slice'
import dashboardReducer from './slices/dashboard-slice'
import progressReducer from './slices/progress-slice'
import reflectionsReducer from './slices/relections-slice'

export const store = configureStore({
  reducer: {
    notificationsReducer,
    dactiveReducer,
    dashboardReducer,
    progressReducer,
    reflectionsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
export const useAppDispatch: () => AppDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
