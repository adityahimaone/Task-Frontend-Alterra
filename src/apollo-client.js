import {ApolloClient,InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://adit-todolist.hasura.app/v1/graphql',
    headers: {
        "x-hasura-admin-secret":
          "UTd6Ktdi2021n8PQd5vyPfbEOMVZMM1n9Ic6VqyEO5LSwobtawqJZtu7b4GJLTu1",
      },
    cache: new InMemoryCache()
});

export default client;