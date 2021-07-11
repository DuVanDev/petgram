import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCard = () => {
  const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
  return (
    <ul>
      {
		[1, 2].map(
		  (photo, key) =>
  <li key={key}>
    <PhotoCard src={DEFAULT_IMAGE} />
  </li>
		)
			}
    </ul>
  )
}
