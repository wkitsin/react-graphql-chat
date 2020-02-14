import gql from "graphql-tag";

export const SUBSCRIPTION_ADD_MESSAGE_TO_ROOM = gql`
  subscription($chatroomId: ID!) {
    messageAdded(chatroomId: $chatroomId) {
      id
      content
    }
  }
`;
