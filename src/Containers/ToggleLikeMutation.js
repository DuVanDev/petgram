import React from 'react'
import { Mutation } from '@apollo/client/react/components'
import { LIKE_MUTATION } from '../GraphQL/Mutations/PhotoMutation'
import { gql } from '@apollo/client'

export const ToggleLikeMutation = ({ children }) => {
  return (
    <Mutation mutation={gql(LIKE_MUTATION)}>
      {children}
    </Mutation>
  )
}
