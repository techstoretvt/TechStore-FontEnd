import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
    cache: new InMemoryCache(),
});

const getTypeProductGQL = async () => {
    return await
        client.query({
            query: gql`
        query getTypeProduct {
          typeproducts {
            id
            nameTypeProduct
          }
        }
      `,
        })
}

export {
    getTypeProductGQL
}