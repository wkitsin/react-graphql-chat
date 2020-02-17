import gql from "graphql-tag";

export const USER = gql`
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

export const ADD_USER_MESSAGE_TO_ROOM = gql`
  mutation($chatroomId: ID!, $content: String!) {
    createUserMessage(input: { chatroomId: $chatroomId, content: $content }) {
      message {
        id
        content
      }
    }
  }
`;
