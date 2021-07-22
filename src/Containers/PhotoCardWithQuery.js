import React from 'react'
import { SINGLE_PHOTO_QUERY } from '../GraphQL/Queries/PhotosQuery'
import { PhotoCard } from '../Components/PhotoCard'
import { gql } from '@apollo/client'
import { Query } from '@apollo/client/react/components'

const renderProp = ({ data: { photo } = {}, loading, error }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => {
  console.log({ id })
  return (
    <>
      <Query query={gql(SINGLE_PHOTO_QUERY)} variables={{ id }}>
        {renderProp}
      </Query>
    </>
  )
}
