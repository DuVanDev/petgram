import { gql } from '@apollo/client'
import { Mutation } from '@apollo/client/react/components'
import React from 'react'
import { REGISTER_MUTATION } from '../GraphQL/Mutations/UserMutation'

export const RegisterMutation = ({ children }) => {
  return (
    <Mutation mutation={gql(REGISTER_MUTATION)}>
      {children}
    </Mutation>
  )
}
