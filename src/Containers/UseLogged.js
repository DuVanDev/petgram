// import React from 'react'

export const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}
