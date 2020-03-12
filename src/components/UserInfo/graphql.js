import gql from "graphql-tag";

export const USER = gql`
  query {
    me {
      email
      chatrooms {
        id
        messages {
          id
          text
        }
      }
    }
  }
`;
