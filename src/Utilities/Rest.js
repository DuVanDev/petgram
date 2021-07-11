export const getAPI = (url) => {
  try {
    console.log({ url })
    const response = window.fetch(url)
    console.log({ response })
    return response.json()
  } catch (error) {
    return new Error(error)
  }
}
