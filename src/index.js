import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ApolloProviderComponent } from './Components/ApolloProviderComponent'
import LoginContextProvider from './Context/LoginContext'
// import { ApolloProviderComponentHooks } from './Components/ApolloProviderComponentHooks'

render(
  <LoginContextProvider>
    <ApolloProviderComponent>
      {/* <ApolloProviderComponentHooks> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </ApolloProviderComponentHooks> */}
    </ApolloProviderComponent>
  </LoginContextProvider>
  ,
  document.getElementById('app')
)
