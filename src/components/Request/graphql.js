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
      pendingRequests {
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

export const CREATE_CHATROOM = gql`
  mutation($requestId: ID!) {
    createChatroom(input: { requestId: $requestId }) {
      chatroom {
        id
        messages {
          id
          content
        }
      }
    }
  }
`;
