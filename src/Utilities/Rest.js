export const getAPI = async (url) => {
  try {
    console.log({ url })
    const response = await window.fetch(url)
    const responseJson = await response.json()
    console.log({ responseJson })
    return responseJson
  } catch (error) {
    return new Error(error)
  }
}
