import React from "react";
import MessageForm from "./MessageForm";
import { useMeQuery, ChatroomFragment } from "../../generated/graphql";
import Chatroom from "./Chatroom";

const CounselorChat = () => {
  const { data } = useMeQuery();
  if (!data) return <div>Loading ...</div>;

  return (
    <>
      {data.me.chatrooms.map((chatroom, index) => (
        <Chatroom chatroom={chatroom} key={index} />
      ))}
    </>
  );
};

export default CounselorChat;
