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

export const ADD_COUNSELOR_MESSAGE_TO_ROOM = gql`
  mutation($chatroomId: ID!, $content: String!) {
    createCounselorMessage(
      input: { chatroomId: $chatroomId, content: $content }
    ) {
      message {
        id
        content
      }
    }
  }
`;
