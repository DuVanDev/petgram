import React from 'react'
import ListOfCategories from './Components/ListOfCategories'
import { ListOfPhotoCard } from './Components/ListOfPhotoCard'
import { Logo } from './Components/Logo'
import { GlobalStyles } from './Styles/GlobalStyles'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <header>
        <Logo />
        <ListOfCategories />
      </header>

      <main>
        <ListOfPhotoCard />
      </main>
    </>
  )
}

export default App
