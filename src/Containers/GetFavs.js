
import { gql } from '@apollo/client'
import { Query } from '@apollo/client/react/components'
import React from 'react'
import { ListOfFavs } from '../Components/ListOfFavs'
import { GET_FAVS } from '../GraphQL/Queries/PhotosQuery'

const renderProps = ({ data, loading, error }) => {
  if (loading) return <span>Loading...</span>
  if (error) return <span>Error</span>
  const { favs } = data
  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => {
  return (
    <Query query={gql(GET_FAVS)} fetchPolicy='network-only'>
      {renderProps}
    </Query>
  )
}
