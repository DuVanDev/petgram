import { gql, useQuery } from '@apollo/react-hooks'
import { PHOTO_QUERY } from '../GraphQL/Queries/PhotosQuery'

const useGetPhotos = (variables) => {
  const { loading, data: { photos = [] } = {}, error } = useQuery(gql(PHOTO_QUERY), { variables: variables })

  // useEffect(() => {
  //   console.log({ data: data })
  // }, [data])

  return { loading, data: photos, error }
}

export default useGetPhotos
