import React, { useEffect, useRef, useState } from 'react'
import { Buttom, Img, ImgWrapper, Article } from './styles'

import { useLocalStorage } from '../../Hooks/useLocalStorage'
import { useNearScreen } from '../../Hooks/useNearScreen'
import { FlavButton } from '../FlavButton'
import { ToggleLikeMutation } from '../../Containers/ToggleLikeMutation'
import { Link } from 'react-router-dom'

export const PhotoCard = ({ id, likes = 0, src }) => {
  const key = `keyLike-${id}`
  const [like, setLike] = useLocalStorage({ key, initialState: false })
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {
        show
          ? <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleClick = () => {
                    !like && toggleLike({
                      variables: {
                        input: { id }
                      }
                    })
                    setLike(!like)
                  }

                  return <FlavButton like={like} likes={likes} onClick={handleClick} />
                }
              }
            </ToggleLikeMutation>
          </>
          : null
      }
    </Article>
  )
}
