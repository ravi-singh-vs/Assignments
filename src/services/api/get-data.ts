import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchData = (resource:string , url : string) =>
  createAsyncThunk(`fetch/${resource}`, async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error', error)
      return []
    }
  })
