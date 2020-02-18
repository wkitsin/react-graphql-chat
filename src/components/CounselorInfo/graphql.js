import gql from "graphql-tag";

export const COUNSELOR = gql`
  query {
    me {
      email
      chatrooms {
        id
        messages {
          id
          content
        }
      }
      pendingRequests {
        status
        user {
          email
        }
        interest {
          name
        }
      }
    }
  }
`;
