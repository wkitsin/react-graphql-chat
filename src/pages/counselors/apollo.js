import { ApolloClient } from "apollo-client";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import ActionCable from "actioncable";
import ActionCableLink from "graphql-ruby-client/subscriptions/ActionCableLink";
import introspectionResult from "../../generated/graphql";

const httpLink = createHttpLink({
  uri: "https://plusvibes.com/graphql/counselors"
});

const getCableUrl = () => {
  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  const host = "plusvibes.com";
  return `${protocol}//${host}/cable?token=eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImNvdW5zZWxvckBnbWFpbC5jb20iLCJpc3MiOiJwbHVzdmliZXMtYXBpIiwiYXVkIjoiY2xpZW50In0.RMsTsA72OvDpmoNjBp36kEaxZBhxd-llBh3TrPyagqo`;
};

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult
});

const createActionCableLink = () => {
  const cable = ActionCable.createConsumer(getCableUrl());
  return new ActionCableLink({ cable });
};

const authLink = new ApolloLink((operation, forward) => {
  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: `eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImNvdW5zZWxvckBnbWFpbC5jb20iLCJpc3MiOiJwbHVzdmliZXMtYXBpIiwiYXVkIjoiY2xpZW50In0.RMsTsA72OvDpmoNjBp36kEaxZBhxd-llBh3TrPyagqo`
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
  cache: new InMemoryCache({
    fragmentMatcher,
    dataIdFromObject: object => `${object.id} ${object.__typename}`
  })
});
