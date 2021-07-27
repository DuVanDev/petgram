import React, { Suspense, useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ListOfCategories from './Components/ListOfCategories'
import { Logo } from './Components/Logo'
import { NavBar } from './Components/NavBar'
import { LoginContext } from './Context/LoginContext'
import { Erro400 } from './Pages/400'
import { NotRegisterUser } from './Pages/NotRegisterUser'
import { GlobalStyles } from './Styles/GlobalStyles'

const Favorites = React.lazy(() => import('./Pages/Favorites'))
const Home = React.lazy(() => import('./Pages/Home'))
const Detail = React.lazy(() => import('./Pages/Detail'))
const Profile = React.lazy(() => import('./Pages/Profile'))

const App = () => {
  const { isAuth } = useContext(LoginContext)

  return (
    <Suspense fallback={() => <div />}>
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
          {!isAuth && (
            <Route path='/login'>
              <NotRegisterUser />
            </Route>
          )}
          {!isAuth && <Redirect from='/favorites' to='/login' />}
          {!isAuth && <Redirect from='/profile' to='/login' />}
          {isAuth && <Redirect from='/login' to='/' />}
          <Route path='/favorites' component={Favorites} />
          <Route path='/profile' component={Profile} />
          <Route path='*' component={Erro400} />
        </Switch>
        <NavBar />
      </main>
    </Suspense>
  )
}

export default App
