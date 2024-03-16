import { API_ENDPOINTS } from '../../constants/api-constants'

export const getReflectionsData = async () => {
  try {
    const res = await fetch(API_ENDPOINTS.REFLECTION_API_ENDPOINT)

    const data = await res.json()

    return {
      success: true,
      data: data,
    }
  } catch (err: any) {
    return {
      success: false,
      error: err.message,
    }
  }
}
