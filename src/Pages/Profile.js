import React, { useContext } from 'react'
import { SubmitButtom } from '../Components/SubmitButtom'
import { LoginContext } from '../Context/LoginContext'

export const Profile = () => {
  const { signOut } = useContext(LoginContext)
  return (
    <div>Profile
      <SubmitButtom value='Sign out' onClick={signOut} />
    </div>
  )
}
