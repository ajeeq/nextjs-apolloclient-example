import { gql, useQuery } from '@apollo/client';

const QUERY = gql`
  {
    country(code: "MY") {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

const Index = () => {
  const { loading, data } = useQuery(QUERY);

  try {
    if (loading || !data) {
      return <h1>loading...</h1>;
    }
    else {
      return (
        <div>
          <p>Country name: {data.country.name}</p>
          <p>Native: {data.country.native}</p>
          <p>Capital: {data.country.capital}</p>
          <p>Emoji: {data.country.emoji}</p>
          <p>Currency: {data.country.currency}</p>
          <p>
            {
              data.country.languages.map((obj, i) => {
                return "Language code: " + obj.code;
              })
            }
          </p>
          <p>
            {
              data.country.languages.map((obj, i) => {
                return "Language name: " + obj.name;
              })
            }
          </p>
        </div>
        
      );
    };
  }
  catch(err) {
    return <h1>Data not found1, please check the query!</h1>;
    }
  }

export default Index;