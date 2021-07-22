import { PHOTO_QUERY } from '../GraphQL/Queries/PhotosQuery'
import { graphql } from '@apollo/client/react/hoc'
import { gql } from '@apollo/client'

export const withPhotos = graphql(gql(PHOTO_QUERY))
