import { useState } from 'react'

export const useLocalStorage = ({ key, initialState }) => {
  const [storageValue, setStorageValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialState
    } catch (error) {
      console.error(error)
      return false
    }
  })

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, value)
      setStorageValue(value)
    } catch (error) {
      console.error(error)
    }
  }

  return [storageValue, setLocalStorage]
}
