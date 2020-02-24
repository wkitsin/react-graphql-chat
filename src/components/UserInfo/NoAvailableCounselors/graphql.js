import { gql } from "apollo-boost";

export const NO_AVAILABLE_COUNSELORS = gql`
  subscription {
    noAvailableCounselors {
      status
    }
  }
`;
