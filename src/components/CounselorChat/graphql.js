import gql from "graphql-tag";

export const COUNSELOR = gql`
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

export const ADD_COUNSELOR_MESSAGE_TO_ROOM = gql`
  mutation($chatroomId: ID!, $text: String!) {
    createCounselorMessage(input: { chatroomId: $chatroomId, text: $text }) {
      message {
        id
        text
      }
    }
  }
`;
