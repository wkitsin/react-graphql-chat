import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import ActionCable from "actioncable";
import ActionCableLink from "graphql-ruby-client/subscriptions/ActionCableLink";

const httpLink = createHttpLink({
  uri: "http://plusvibes-staging/graphql/users"
});

const getCableUrl = () => {
  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  const host = "plusvibes-staging";
  return `${protocol}//${host}/cable?token=eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwiZGV2aWNlX2lkIjoiZGV2aWNlXzEiLCJpc3MiOiJwbHVzdmliZXMtYXBpIiwiYXVkIjoiY2xpZW50In0.-qAodI7_uDK4tTXoBpluiQy03uzX5f-MbaF56665MGg`;
};

const createActionCableLink = () => {
  const cable = ActionCable.createConsumer(getCableUrl());
  return new ActionCableLink({ cable });
};

const authLink = new ApolloLink((operation, forward) => {
  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: `eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwiZGV2aWNlX2lkIjoiZGV2aWNlXzEiLCJpc3MiOiJwbHVzdmliZXMtYXBpIiwiYXVkIjoiY2xpZW50In0.-qAodI7_uDK4tTXoBpluiQy03uzX5f-MbaF56665MGg`
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
