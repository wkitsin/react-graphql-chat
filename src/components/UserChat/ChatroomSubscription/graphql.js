import { gql } from "apollo-boost";

export const CHAT_ACCEPTED = gql`
  subscription {
    chatAccepted {
      id
      messages {
        text
      }
    }
  }
`;
