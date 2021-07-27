import React, { useContext } from 'react'
import { Layout } from '../Components/Layout'
import { SubmitButtom } from '../Components/SubmitButtom'
import { LoginContext } from '../Context/LoginContext'

const Profile = () => {
  const { signOut } = useContext(LoginContext)
  return (
    <Layout title='Profile' description='Your data'>
      <SubmitButtom value='Sign out' onClick={signOut} />
    </Layout>
  )
}

export default Profile
