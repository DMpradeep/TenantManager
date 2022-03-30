import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import { TenantApiEndpoints } from "./TenantApiEndpoints";

const restLink = new RestLink({
  endpoints: {
    ...TenantApiEndpoints,
  },
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([restLink]),
});
