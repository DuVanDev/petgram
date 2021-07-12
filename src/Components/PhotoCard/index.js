import React, { useEffect, useRef, useState } from 'react'
import { Buttom, Img, ImgWrapper, Article } from './styles'

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../Hooks/useLocalStorage'
import { useNearScreen } from '../../Hooks/useNearScreen'

export const PhotoCard = ({ id, likes = 0, src }) => {
  const key = `keyLike-${id}`
  const [like, setLike] = useLocalStorage({ ...key, initialState: false })
  const [show, element] = useNearScreen()

  const Icon = like ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
        show
          ? <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <Buttom onClick={() => setLike(!like)}>
              <Icon size='32px' /> {likes} Likes!
            </Buttom>
          </>
          : null
      }
    </Article>
  )
}
