import React from 'react'
import { gql } from '@apollo/client'
import { Mutation } from '@apollo/client/react/components'
import { LOGIN_MUTATION } from '../GraphQL/Mutations/UserMutation'

export const LoginMutation = ({ children }) => {
  return (
    <Mutation mutation={gql(LOGIN_MUTATION)}>
      {children}
    </Mutation>
  )
}
