import "./App.css";
import { AppRoutes } from "./AppRoutes";
import { ApolloProvider } from "@apollo/client";
import { client } from "./Api/ApolloClient";

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppRoutes />
    </ApolloProvider>
  );
};
