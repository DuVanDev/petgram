import React from 'react'
// import { Link } from 'react-router-dom'
import { Nav, Link } from './styles'

import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '3rem'

export const NavBar = () => {
  return (
    <Nav>
      <Link exact to='/'>
        <MdHome size={SIZE} />
      </Link>
      <Link exact to='/favorites'>
        <MdFavoriteBorder size={SIZE} />
      </Link>
      <Link exact to='/profile'>
        <MdPersonOutline size={SIZE} />
      </Link>
    </Nav>
  )
}
