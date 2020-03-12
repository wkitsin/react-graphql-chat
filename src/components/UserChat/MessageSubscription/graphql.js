import gql from "graphql-tag";

export const SUBSCRIPTION_ADD_USER_MESSAGE_TO_ROOM = gql`
  subscription {
    userMessageAdded {
      id
      text
    }
  }
`;
