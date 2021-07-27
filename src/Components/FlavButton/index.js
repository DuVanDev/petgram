import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Buttom } from './styles'
import PropTypes from 'prop-types'

export const FlavButton = ({ like, likes, onClick }) => {
  const Icon = like ? MdFavorite : MdFavoriteBorder

  return (
    <Buttom onClick={onClick}>
      <Icon size='32px' /> {likes} Likes!
    </Buttom>
  )
}

FlavButton.prototype = {
  like: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
