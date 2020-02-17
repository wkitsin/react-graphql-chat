import gql from "graphql-tag";

export const COUNSELOR = gql`
  query {
    me {
      email
      chatrooms {
        messages {
          content
        }
      }
      requests {
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
