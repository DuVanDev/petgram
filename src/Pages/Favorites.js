import React from 'react'
import { Layout } from '../Components/Layout'
import { FavsWithQuery } from '../Containers/GetFavs'

const Favorites = () => {
  return (
    <Layout title='Favorites' description='Your favorites Photos'>
      <FavsWithQuery />
    </Layout>
  )
}

export default Favorites
