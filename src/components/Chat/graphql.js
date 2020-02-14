import gql from "graphql-tag";

export const ME = gql`
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
    }
  }
`;
