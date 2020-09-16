//--------------------------------//
// Apollo CLient(React) HOC Code: //
//--------------------------------//
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

export default function App({ Component, pageProps }) {

  //defining apollo client
  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
