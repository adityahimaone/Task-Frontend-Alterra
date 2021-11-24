import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "https://adit-todolist.hasura.app/v1/graphql",
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret":
      "UTd6Ktdi2021n8PQd5vyPfbEOMVZMM1n9Ic6VqyEO5LSwobtawqJZtu7b4GJLTu1",
  },
});

const wsLink = new WebSocketLink({
  uri: "ws://adit-todolist.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "UTd6Ktdi2021n8PQd5vyPfbEOMVZMM1n9Ic6VqyEO5LSwobtawqJZtu7b4GJLTu1",
      },
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
