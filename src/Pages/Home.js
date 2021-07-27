import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfPhotoCard } from '../Components/ListOfPhotoCard'
import { withPhotos } from '../HOC/withPhotos'
import { Helmet } from 'react-helmet'

const Home = () => {
  const ListOfPhotoCardWithPhoto = withPhotos(ListOfPhotoCard)
  const { categoryId } = useParams()
  return (
    <>
      <Helmet>
        <title>
          Home | Petgram 🐶
        </title>
        <meta name='description' content='Your best app to share photo pets ' />
      </Helmet>
      <ListOfPhotoCardWithPhoto categoryId={categoryId} />
    </>
  )
}

export default Home
