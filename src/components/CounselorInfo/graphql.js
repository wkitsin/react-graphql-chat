import gql from "graphql-tag";

export const ME = gql`
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
