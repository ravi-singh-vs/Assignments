import { configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

import { covidDataReducer } from './reducers'

export const store = configureStore({
  reducer: {
    covidDataReducer: covidDataReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
export const useAppDispatch: () => AppDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
