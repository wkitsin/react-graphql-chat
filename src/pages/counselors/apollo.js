import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import ActionCable from "actioncable";
import ActionCableLink from "graphql-ruby-client/subscriptions/ActionCableLink";

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql/counselors"
});

const getCableUrl = () => {
  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  const host = window.location.hostname;
  const port = process.env.CABLE_PORT || "3000";
  return `${protocol}//${host}:${port}/cable?token=eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImNvdW5zZWxvckBnbWFpbC5jb20iLCJpc3MiOiJwbHVzdmliZXMtYXBpIiwiYXVkIjoiY2xpZW50In0.RMsTsA72OvDpmoNjBp36kEaxZBhxd-llBh3TrPyagqo`;
};

const createActionCableLink = () => {
  const cable = ActionCable.createConsumer(getCableUrl());
  return new ActionCableLink({ cable });
};

const authLink = new ApolloLink((operation, forward) => {
  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: `bearer eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImNvdW5zZWxvckBnbWFpbC5jb20iLCJpc3MiOiJwbHVzdmliZXMtYXBpIiwiYXVkIjoiY2xpZW50In0.RMsTsA72OvDpmoNjBp36kEaxZBhxd-llBh3TrPyagqo`
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const hasSubscriptionOperation = ({ query: { definitions } }) => {
  return definitions.some(
    ({ kind, operation }) =>
      kind === "OperationDefinition" && operation === "subscription"
  );
};

const link = ApolloLink.split(
  hasSubscriptionOperation,
  createActionCableLink(),
  httpLink
);

export const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache()
});
