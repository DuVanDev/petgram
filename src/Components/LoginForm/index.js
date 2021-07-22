import React from 'react'
import { useInputValue } from '../../Hooks/useInputValue'
import { SubmitButtom } from '../SubmitButtom'
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
      <SubmitButtom value={textButton} disabled={loading} />
      {errorMsg ? <Error>{errorMsg}</Error> : null}
    </Form>
  )
}
