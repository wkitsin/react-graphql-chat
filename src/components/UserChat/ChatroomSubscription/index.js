import { useEffect } from "react";
import { CHAT_ACCEPTED } from "./graphql";

const ChatroomSubscription = ({ subscribeToMore }) => {
  useEffect(() => {
    return subscribeToMore({
      document: CHAT_ACCEPTED,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const { chatAccepted } = subscriptionData.data;

        console.log({ chatAccepted, prev });
        const alreadyInList = prev.me.chatrooms.find(
          chatroom => chatroom.id === chatAccepted.id
        );

        if (alreadyInList) {
          return prev;
        }

        return {
          ...prev,
          me: {
            ...prev.me,
            chatrooms: [...prev.me.chatrooms.concat(chatAccepted)]
          }
        };
      }
    });
  }, []);
  return null;
};

export default ChatroomSubscription;
