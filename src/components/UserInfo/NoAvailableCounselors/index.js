import { useEffect } from "react";
import { NO_AVAILABLE_COUNSELORS } from "./graphql";
import { useAlert } from "react-alert";

const NoAvailableCounselorsSubscription = ({ subscribeToMore }) => {
  useEffect(() => {
    return subscribeToMore({
      document: NO_AVAILABLE_COUNSELORS,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        console.log({ prev, subscriptionData });
      }
    });
  }, []);
  return null;
};

export default NoAvailableCounselorsSubscription;
