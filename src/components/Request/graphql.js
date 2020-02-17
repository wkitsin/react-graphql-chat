import gql from "graphql-tag";

export const REQUEST_SUBSCRIPTION = gql`
  subscription {
    chatRequest {
      interest {
        name
      }
      user {
        email
      }
      status
    }
  }
`;

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
