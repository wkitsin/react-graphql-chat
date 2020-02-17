import { useEffect } from "react";
import { SUBSCRIPTION_ADD_COUNSELOR_MESSAGE_TO_ROOM } from "./graphql";

const Subscription = ({ subscribeToMore, chatroomId }) => {
  useEffect(() => {
    return subscribeToMore({
      document: SUBSCRIPTION_ADD_COUNSELOR_MESSAGE_TO_ROOM,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const { counselorMessageAdded } = subscriptionData.data;
        console.log({ prev, subscriptionData });

        if (counselorMessageAdded) {
          const chatroom = prev.me.chatrooms.find(
            chatroom => chatroomId === chatroom.id
          );

          const alreadyInList = chatroom.messages.find(
            message => message.id === counselorMessageAdded.id
          );

          if (alreadyInList) {
            return prev;
          }

          const data = prev.me.chatrooms.map(chatroom => {
            if (chatroomId === chatroom.id) {
              return {
                ...chatroom,
                messages: chatroom.messages.concat(counselorMessageAdded)
              };
            } else {
              return chatroom;
            }
          });

          return { ...prev, me: { ...prev.me, chatrooms: data } };
        }
      }
    });
  }, []);
  return null;
};

export default Subscription;
