//---------------------------//
// Default Boilerplate Code: //
//---------------------------//
// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

//----------------------------//
// Apollo CLient(React) Code: //
//----------------------------//
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
