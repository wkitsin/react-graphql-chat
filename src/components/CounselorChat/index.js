import React from "react";
import { Query, Mutation } from "react-apollo";
import MessageForm from "./MessageForm";
import Subscription from "./Subscription/index";
import { ADD_COUNSELOR_MESSAGE_TO_ROOM, COUNSELOR } from "./graphql";

const CounselorChat = () => {
  const chatroomsToRender = (chatrooms, subscribeToMore) => {
    if (!chatrooms) return null;

    return chatrooms.map((chatroom, index) => (
      <div key={index}>
        <h3>Chatroom ID: {chatroom.id}</h3>
        {chatroom.messages.map((message, index) => (
          <p key={index}>{message.text}</p>
        ))}
        <Mutation mutation={ADD_COUNSELOR_MESSAGE_TO_ROOM}>
          {(createCounselorMessage, { loading, data }) => (
            <MessageForm
              chatroomId={chatroom.id}
              onSubmitForm={({ chatroomId, message, event }) => {
                event.preventDefault();
                return createCounselorMessage({
                  variables: { text: message, chatroomId },
                  update: (cache, { data: { createCounselorMessage } }) => {
                    {
                      const message = createCounselorMessage.message;
                      console.log({ message });

                      if (message) {
                        const currentMessages = cache.readQuery({
                          query: COUNSELOR
                        });
                        const chatroomId = chatroom.id;

                        const UpdateMessage = currentMessages.me.chatrooms.map(
                          chatroom => {
                            if (chatroomId === chatroom.id) {
                              return {
                                ...chatroom,
                                messages: chatroom.messages.concat(message)
                              };
                            } else {
                              return chatroom;
                            }
                          }
                        );

                        cache.writeQuery({
                          query: COUNSELOR,
                          data: {
                            me: {
                              ...currentMessages.me,
                              chatrooms: UpdateMessage
                            }
                          }
                        });
                      }
                    }
                  }
                });
              }}
            />
          )}
        </Mutation>
        <Subscription
          subscribeToMore={subscribeToMore}
          chatroomId={chatroom.id}
        />
      </div>
    ));
  };

  return (
    <>
      <Query query={COUNSELOR}>
        {({ data, loading, subscribeToMore }) => {
          if (loading) return "...Loading";
          if (!data.me) return null;

          return (
            <div>{chatroomsToRender(data.me.chatrooms, subscribeToMore)}</div>
          );
        }}
      </Query>
    </>
  );
};

export default CounselorChat;
