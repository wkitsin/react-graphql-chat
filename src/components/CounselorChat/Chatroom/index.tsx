import React from "react";
import {
  useCreateCounselorMessageMutationMutation,
  ChatroomFragmentDoc
} from "../../../generated/graphql";
import MessageForm from "../MessageForm";
import {
  ChatroomFragment,
  useCounselorMessageAddedSubscription
} from "../../../generated/graphql";

const Chatroom = ({ chatroom }) => {
  const [addMessage] = useCreateCounselorMessageMutationMutation({
    update: (client, mutationResult) => {
      const { message } = mutationResult.data.createCounselorMessage;

      if (message) {
        const selectedChatroom = client.readFragment<ChatroomFragment>({
          id: `${chatroom.id} Chatroom`,
          fragment: ChatroomFragmentDoc,
          fragmentName: "Chatroom"
        });

        if (selectedChatroom) {
          client.writeFragment<ChatroomFragment>({
            id: `${chatroom.id} Chatroom`,
            fragment: ChatroomFragmentDoc,
            fragmentName: "Chatroom",
            data: {
              ...selectedChatroom,
              messages: [...selectedChatroom.messages, message]
            }
          });
        }
      }
    }
  });

  const {} = useCounselorMessageAddedSubscription({
    onSubscriptionData: ({ subscriptionData, client }) => {
      const message = subscriptionData.data?.counselorMessageAdded;

      if (message) {
        const oldData = client.readFragment<ChatroomFragment>({
          id: `${chatroom.id} Chatroom`,
          fragment: ChatroomFragmentDoc,
          fragmentName: "Chatroom"
        });

        if (oldData) {
          client.writeFragment<ChatroomFragment>({
            id: `${chatroom.id} Chatroom`,
            fragment: ChatroomFragmentDoc,
            fragmentName: "Chatroom",
            data: { ...oldData, messages: [...oldData.messages, message] }
          });
        }
      }
    }
  });

  return (
    <div>
      <h3>Chatroom ID: {chatroom.id}</h3>
      {chatroom.messages.map((message, index) => (
        <p key={index}>{message.text}</p>
      ))}
      <MessageForm
        chatroomId={chatroom.id}
        onSubmitForm={({ chatroomId, message, event }) => {
          event.preventDefault();

          addMessage({ variables: { chatroomId, text: message } });
        }}
      />
    </div>
  );
};

export default Chatroom;
