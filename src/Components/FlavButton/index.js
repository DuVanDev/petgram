import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Buttom } from './styles'

export const FlavButton = ({ like, likes, onClick }) => {
  const Icon = like ? MdFavorite : MdFavoriteBorder

  return (
    <Buttom onClick={onClick}>
      <Icon size='32px' /> {likes} Likes!
    </Buttom>
  )
}
