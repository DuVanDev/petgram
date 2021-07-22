import React from 'react'
// import useGetPhotos from '../../Hooks/useGetPhotos'
import { PhotoCard } from '../PhotoCard'
/* categoryId: 2
id: "0"
liked: false
likes: 7
src: "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"
userId: "100" */

export const ListOfPhotoCard = ({ data: { photos = [] } }) => {
  // const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

  return (
    <ul>
      {
		photos.map(
		  (photo, key) =>
  <li key={key}>
    <PhotoCard {...photo} />
  </li>
		)
			}
    </ul>
  )
}
