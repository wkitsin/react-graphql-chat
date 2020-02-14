import gql from "graphql-tag";

export const SUBSCRIPTION_ADD_MESSAGE_TO_ROOM = gql`
  subscription {
    messageAdded {
      id
      content
    }
  }
`;
