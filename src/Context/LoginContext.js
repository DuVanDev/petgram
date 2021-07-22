import React, { createContext, useState } from 'react'
import { useLocalSession } from '../Hooks/useLocalSession'
import { useLocalStorage } from '../Hooks/useLocalStorage'

export const LoginContext = createContext()

const LoginContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [token, setToken] = useLocalSession({ key: 'token', initialState: undefined })

  const value = {
    isAuth,
    loginUser: (token) => {
      setToken(token)
      setIsAuth(true)
    }
  }

  return (
    <LoginContext.Provider value={value}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider
