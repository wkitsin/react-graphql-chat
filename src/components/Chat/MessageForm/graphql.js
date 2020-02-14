import gql from "graphql-tag";

export const ADD_MESSAGE_TO_ROOM = gql`
  mutation($chatroomId: ID!, $content: String!) {
    createUserMessage(input: { chatroomId: $chatroomId, content: $content }) {
      message {
        id
        content
      }
    }
  }
`;
