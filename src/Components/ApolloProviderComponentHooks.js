import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/react-hooks'
import React from 'react'

const client = new ApolloClient({
  uri: 'https://petgram-o7875jfn3-duvanmorenocardona.vercel.app/graphql',
  cache: new InMemoryCache()
})

export const ApolloProviderComponentHooks = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
