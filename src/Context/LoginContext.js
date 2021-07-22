import React, { createContext, useState } from 'react'
import { useLocalSession } from '../Hooks/useLocalSession'

export const LoginContext = createContext()

const LoginContextProvider = ({ children }) => {
  const [token, setToken] = useLocalSession({ key: 'token', initialState: undefined })
  const [isAuth, setIsAuth] = useState(() => token)

  const value = {
    isAuth,
    loginUser: (token) => {
      setToken(token)
      setIsAuth(true)
    },
    signOut: () => {
      window.sessionStorage.removeItem('token')
      setIsAuth(false)
    }
  }

  return (
    <LoginContext.Provider value={value}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider
