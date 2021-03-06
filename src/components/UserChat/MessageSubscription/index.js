import { useEffect } from "react";
import { SUBSCRIPTION_ADD_USER_MESSAGE_TO_ROOM } from "./graphql";

const MessageSubscription = ({ subscribeToMore, chatroomId }) => {
  useEffect(() => {
    return subscribeToMore({
      document: SUBSCRIPTION_ADD_USER_MESSAGE_TO_ROOM,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const { userMessageAdded } = subscriptionData.data;
        console.log({ prev, subscriptionData });

        if (userMessageAdded) {
          const chatroom = prev.me.chatrooms.find(
            chatroom => chatroomId === chatroom.id
          );

          const alreadyInList = chatroom.messages.find(
            message => message.id === userMessageAdded.id
          );

          if (alreadyInList) {
            return prev;
          }

          const data = prev.me.chatrooms.map(chatroom => {
            if (chatroomId === chatroom.id) {
              return {
                ...chatroom,
                messages: chatroom.messages.concat(userMessageAdded)
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

export default MessageSubscription;
