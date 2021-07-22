import React from 'react'
import { Buttom } from './styles'

export const SubmitButtom = ({ value, onClick, disabled }) => {
  return (
    <Buttom type='submit' value={value} onClick={onClick} />
  )
}
