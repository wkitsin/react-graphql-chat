import { useEffect } from "react";
import { UNRESPONSIVE_REQUEST_SUBSCRIPTION } from "./graphql";

const UnresponsiveRequestSubscription = ({ subscribeToMore }) => {
  useEffect(() => {
    return subscribeToMore({
      document: UNRESPONSIVE_REQUEST_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;

        const { unresponsiveRequest } = subscriptionData.data;

        const removedRequest = prev.me.pendingRequests.filter(request => {
          return unresponsiveRequest.id != request.id;
        });

        return {
          me: {
            ...prev.me,
            pendingRequests: removedRequest
          }
        };
      }
    });
  }, []);
  return null;
};

export default UnresponsiveRequestSubscription;
