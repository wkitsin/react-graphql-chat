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

export const ADD_USER_MESSAGE_TO_ROOM = gql`
  mutation($chatroomId: ID!, $text: String!) {
    createUserMessage(input: { chatroomId: $chatroomId, text: $text }) {
      message {
        id
        text
      }
    }
  }
`;
