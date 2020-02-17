import gql from "graphql-tag";

export const ME_WITH_REQUEST = gql`
  query {
    me {
      email
      chatrooms {
        messages {
          content
        }
      }
      requests {
        id
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
