import React, { useContext } from 'react'
import { LoginForm } from '../Components/LoginForm'
import { RegisterMutation } from '../Containers/RegisterMutation'
import { LoginMutation } from '../Containers/LoginMutation'
import { LoginContext } from '../Context/LoginContext'

export const NotRegisterUser = () => {
  const { loginUser } = useContext(LoginContext)

  return (
    <div>
      Sing Up
      <RegisterMutation>
        {
                  (register, { error, loading }) => {
                    const onSubmit = async ({ email, password }) => {
                      try {
                        const input = { email, password }
                        const response = await register({ variables: { input } })
                        const { data: { signup: token } } = response
                        console.log({ token })
                        loginUser(token)
                      } catch (error) {
                        console.error(error)
                      }
                    }

                    const errorMsg = error && 'Error to Sign up'

                    return (
                      <LoginForm
                        onSubmit={onSubmit}
                        errorMsg={errorMsg}
                        loading={loading}
                        textButton='Sign Up'
                      />
                    )
                  }
                }
      </RegisterMutation>
      Sign In
      <LoginMutation>
        {
                  (login, { error, loading }) => {
                    const onSubmit = async ({ email, password }) => {
                      try {
                        const input = { email, password }
                        const response = await login({ variables: { input } })
                        const { data: { login: token } } = response
                        console.log({ token })
                        loginUser(token)
                      } catch (error) {
                        console.error(error)
                      }
                    }

                    const errorMsg = error && 'Password incorrect or user not sign up'

                    return <LoginForm onSubmit={onSubmit} errorMsg={errorMsg} loading={loading} textButton='Sign In' />
                  }
                }
      </LoginMutation>
    </div>
  )
}
