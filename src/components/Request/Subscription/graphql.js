import { gql } from "apollo-boost";

export const REQUEST_SUBSCRIPTION = gql`
  subscription {
    chatRequest {
      id
      interest {
        name
      }
      user {
        email
      }
      status
    }
  }
`;
