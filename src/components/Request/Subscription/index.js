import { useEffect } from "react";
import { REQUEST_SUBSCRIPTION } from "./graphql";

const Subscription = ({ subscribeToMore }) => {
  useEffect(() => {
    return subscribeToMore({
      document: REQUEST_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        console.log({ prev, subscriptionData });

        if (!subscriptionData.data) return prev;

        const { chatRequest } = subscriptionData.data;

        const alreadyInList = prev.me.requests.find(
          request => request.id === chatRequest.id
        );

        if (alreadyInList) {
          return prev;
        }

        return {
          ...prev,
          me: {
            ...prev.me,
            requests: [...prev.me.requests.concat(chatRequest)]
          }
        };
      }
    });
  }, []);
  return null;
};

export default Subscription;
