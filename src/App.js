import React, { Profiler } from 'react'
import { Route, Switch } from 'react-router-dom'
import ListOfCategories from './Components/ListOfCategories'
import { Logo } from './Components/Logo'
import { NavBar } from './Components/NavBar'
import { PhotoCardWithQuery } from './Containers/PhotoCardWithQuery'
import { UserLogged } from './Containers/UseLogged'
import { LoginContext } from './Context/LoginContext'
import { Detail } from './Pages/Detail'
import { Favorites } from './Pages/Favorites'
import Home from './Pages/Home'
import { NotRegisterUser } from './Pages/NotRegisterUser'
import { Profile } from './Pages/Profile'
// import { withPhotos } from './HOC/withPhotos'
import { GlobalStyles } from './Styles/GlobalStyles'

const App = () => {
  // const ListOfPhotoCardWithPhoto = withPhotos(ListOfPhotoCard)
  const searchVariables = window.location.search
  const urlParams = new window.URLSearchParams(searchVariables)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyles />
      <header>
        <Logo />
        <ListOfCategories />
      </header>

      <main>
        <Switch>
          <Route path='/detail/:detailId'>
            <Detail />
          </Route>
          <Route exact path={['/pet/:categoryId', '/']}>
            <Home />
          </Route>
          <LoginContext.Consumer>
            {
              ({ isAuth }) => {
                const PageFavorites = isAuth
                  ? Favorites
                  : NotRegisterUser

                const PageProfile = isAuth
                  ? Profile
                  : NotRegisterUser

                return (
                  <>
                    <Route path='/favorites' component={PageFavorites} />
                    <Route path='/profile' component={PageProfile} />
                  </>
                )
              }
            }
          </LoginContext.Consumer>

        </Switch>
        <NavBar />
      </main>
    </>
  )
}

export default App
