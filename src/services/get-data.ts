export const getData = async (url: string) => {
  try {
    const res = await fetch(url)

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
