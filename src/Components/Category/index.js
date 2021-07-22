import React from 'react'
import { Image, NavLinkCategories } from './styles'

const DEFAULT_IMAGE = 'https://imgur.com/dJa0Hpl'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => {
  return (
    <NavLinkCategories to={path}>
      <Image src={cover} />
      {emoji}
    </NavLinkCategories>
  )
}
