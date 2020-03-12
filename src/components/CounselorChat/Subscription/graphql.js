import gql from "graphql-tag";

export const SUBSCRIPTION_ADD_COUNSELOR_MESSAGE_TO_ROOM = gql`
  subscription {
    counselorMessageAdded {
      id
      text
    }
  }
`;
