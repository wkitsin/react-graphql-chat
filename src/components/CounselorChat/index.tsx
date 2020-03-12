import React from "react";
import MessageForm from "./MessageForm";
import {
  useMeQuery,
  ChatroomFragment,
  useCreateCounselorMessageMutationMutation
} from "../../generated/graphql";

const CounselorChat = () => {
  const [addMessage] = useCreateCounselorMessageMutationMutation();

  const chatroomsToRender = (chatrooms): ChatroomFragment => {
    if (!chatrooms) return null;

    return chatrooms.map((chatroom, index) => (
      <div key={index}>
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
    ));
  };

  const { loading, error, data } = useMeQuery();
  if (!data) return <div>Loading ...</div>;

  return <>{chatroomsToRender(data.me.chatrooms)}</>;
};

export default CounselorChat;
