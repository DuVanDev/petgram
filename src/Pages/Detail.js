
import React from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../Components/Layout'
import { PhotoCardWithQuery } from '../Containers/PhotoCardWithQuery'

const Detail = () => {
  const { detailId } = useParams()
  return (
    <Layout title='Detail'>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  )
}

export default Detail
