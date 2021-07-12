export const getAPI = async (url) => {
  try {
    const response = await window.fetch(url)
    const responseJson = await response.json()
    return responseJson
  } catch (error) {
    return new Error(error)
  }
}
