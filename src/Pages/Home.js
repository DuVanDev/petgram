import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfPhotoCard } from '../Components/ListOfPhotoCard'
import { withPhotos } from '../HOC/withPhotos'

const Home = () => {
  const ListOfPhotoCardWithPhoto = withPhotos(ListOfPhotoCard)
  const { categoryId } = useParams()
  return (
    <>
      <ListOfPhotoCardWithPhoto categoryId={categoryId} />
    </>
  )
}

export default Home
