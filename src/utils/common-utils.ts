import AsyncStorage from '@react-native-async-storage/async-storage'

import { COLORS } from '../theme'

export const readDataInAsyncStorage = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key)
  } catch (error) {
    console.error('Failed to fetch.\nError : ', error)
  }
}

export const setDataInAsyncStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.error('Failed to save data.\n Error :',error)
  }
}

export const getProgressChartColor = (percentage: number): string => {
  let color: string
  switch (Math.floor(percentage / 10)) {
    case 0:
      color = COLORS.success[50]
      break
    case 1:
      color = COLORS.success[200]
      break
    case 2:
      color = COLORS.success[300]
      break
    case 3:
      color = COLORS.success[400]
      break
    case 4:
      color = COLORS.secondary[100]
      break
    case 5:
      color = COLORS.secondary[200]
      break
    case 6:
      color = COLORS.secondary[300]
      break
    case 7:
      color = COLORS.secondary[400]
      break
    case 8:
      color = COLORS.primary[50]
      break
    case 9:
      color = COLORS.primary[100]
      break
    default:
      color = COLORS.primary[200]
  }
  return color
}
