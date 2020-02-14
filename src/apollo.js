import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import ActionCable from "actioncable";
import ActionCableLink from "graphql-ruby-client/subscriptions/ActionCableLink";

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql/users"
});

const getCableUrl = () => {
  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  const host = window.location.hostname;
  const port = process.env.CABLE_PORT || "3000";
  return `${protocol}//${host}:${port}/cable?token=eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwiaXNzIjoicGx1c3ZpYmVzLWFwaSIsImF1ZCI6ImNsaWVudCJ9.N0gBzEluP8t-910AzSso-J0lS_9rjfLNnJpbVKK5V30`;
};

const createActionCableLink = () => {
  const cable = ActionCable.createConsumer(getCableUrl());
  return new ActionCableLink({ cable });
};

const authLink = new ApolloLink((operation, forward) => {
  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: `bearer eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwiaXNzIjoicGx1c3ZpYmVzLWFwaSIsImF1ZCI6ImNsaWVudCJ9.N0gBzEluP8t-910AzSso-J0lS_9rjfLNnJpbVKK5V30`
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
