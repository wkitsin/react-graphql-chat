import React from "react";
import { Query, Mutation } from "react-apollo";
import { USER } from "./graphql";
import MessageForm from "./MessageForm";
import MessageSubscription from "./Subscription/index";
import { ADD_USER_MESSAGE_TO_ROOM } from "./graphql";
import ChatroomSubscription from "./ChatroomSubscription";

const UserChat = () => {
  const chatroomsToRender = (chatrooms, subscribeToMore) => {
    if (!chatrooms) return null;

    return chatrooms.map(chatroom => (
      <>
        <h3>Chatroom ID: {chatroom.id}</h3>
        {chatroom.messages.map((message, index) => (
          <p key={index}>{message.content}</p>
        ))}
        <Mutation mutation={ADD_USER_MESSAGE_TO_ROOM}>
          {(createUserMessage, { loading, data }) => (
            <MessageForm
              chatroomId={chatroom.id}
              onSubmitForm={({ chatroomId, message, event }) => {
                event.preventDefault();
                return createUserMessage({
                  variables: { content: message, chatroomId },
                  update: (cache, { data: { createUserMessage } }) => {
                    {
                      const message = createUserMessage.message;

                      if (message) {
                        const currentMessages = cache.readQuery({
                          query: USER
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

                        console.log({ UpdateMessage });

                        cache.writeQuery({
                          query: USER,
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
        <MessageSubscription
          subscribeToMore={subscribeToMore}
          chatroomId={chatroom.id}
        />
      </>
    ));
  };

  return (
    <>
      <Query query={USER}>
        {({ data, loading, subscribeToMore }) => {
          if (loading) return "...Loading";
          if (!data.me) return null;

          return (
            <div>
              {chatroomsToRender(data.me.chatrooms, subscribeToMore)}
              <ChatroomSubscription subscribeToMore={subscribeToMore} />
            </div>
          );
        }}
      </Query>
    </>
  );
};

export default UserChat;
