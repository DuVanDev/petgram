import React from 'react'
import { Buttom, Img, ImgWrapper } from './styles'

import { MdFavoriteBorder } from 'react-icons/md'

export const PhotoCard = ({ id, likes = 0, src }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>
      <Buttom>
        <MdFavoriteBorder size='32px' /> {likes} Likes!
      </Buttom>
    </article>
  )
}
