import { useState } from 'react'

export const useLocalSession = ({ key, initialState }) => {
  const [sessionValue, setSessionValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialState
    } catch (error) {
      console.error(error)
      return null
    }
  })

  const setSessionStorage = (value) => {
    try {
      window.sessionStorage.setItem(key, value)
      setSessionValue(value)
    } catch (error) {
      console.error({ error })
    }
  }

  return [sessionValue, setSessionStorage]
}
