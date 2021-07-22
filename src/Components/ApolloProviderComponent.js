import { ApolloClient, createHttpLink, ApolloProvider, InMemoryCache, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import React from 'react'

const httpLink = createHttpLink({
  uri: 'https://petgram-o7875jfn3-duvanmorenocardona.vercel.app/graphql'
})

const authLink = setContext(
  (_, { headers }) => {
    const token = window.sessionStorage.getItem('token')
    console.log({
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    })
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    }
  }
)

const errorLink = onError(({ networkError }) => {
  console.log({ networkError })
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.location.href = '/'
  }
  if (networkError && networkError.result.code === 'INTERNAL_SERVER_ERROR') {
    window.sessionStorage.removeItem('token')
    window.location.href = '/'
  }
})

const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache()
}
)

export const ApolloProviderComponent = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
