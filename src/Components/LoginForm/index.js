import React from 'react'
import { useInputValue } from '../../Hooks/useInputValue'
import { Buttom, Input, Form, Error } from './styles'

export const LoginForm = ({ onSubmit, textButton, errorMsg, loading }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Form disabled={loading} onSubmit={handleSubmit}>
      <Input placeholder='Email' disabled={loading} {...email} />
      <Input placeholder='Password' disabled={loading} type='password' {...password} />
      <Buttom value={textButton} disabled={loading} type='submit' />
      {errorMsg ? <Error>{errorMsg}</Error> : null}
    </Form>
  )
}
