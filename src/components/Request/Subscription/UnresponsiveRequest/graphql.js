import { gql } from "apollo-boost";

export const UNRESPONSIVE_REQUEST_SUBSCRIPTION = gql`
  subscription {
    unresponsiveRequest {
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
