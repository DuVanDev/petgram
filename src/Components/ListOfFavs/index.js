import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Fav } from './styles'

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {
		favs.map((fav) =>
  <Link to={`/detail/${fav.id}`}>
    <Fav src={fav.src} />
  </Link>)
	}
    </Grid>
  )
}
