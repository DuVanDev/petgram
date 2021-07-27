import React from 'react'
import { Helmet } from 'react-helmet'
import { Title, Desc, Main } from './styles'

export const Layout = ({ children, title, description }) => {
  return (
    <Main>
      <Helmet>
        <title>
          {title} | Petgram 🐶
        </title>
        <meta name='description' content={description} />
      </Helmet>
      <Title>{title}</Title>
      <Desc>{description}</Desc>
      {
			  children
	  }
    </Main>
  )
}
