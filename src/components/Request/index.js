import React from "react";
import { Query, Mutation } from "react-apollo";
import { ME_WITH_REQUEST, CREATE_CHATROOM } from "./graphql";
import { COUNSELOR } from "../CounselorChat/graphql";
import UnresponsiveRequestSubscription from "./Subscription/UnresponsiveRequest";
import NewRequestSubscription from "./Subscription/NewRequest";

const Request = () => {
  const requestsToRender = requests =>
    requests.map(request => (
      <>
        <Mutation mutation={CREATE_CHATROOM}>
          {(createChatroom, { loading, data }) => (
            <>
              <h1>Request: {request.id}</h1>
              <p>Requester's Email: {request.user.email}</p>
              <p>Interest: {request.interest.name}</p>
              <p>Status: {request.status}</p>
              <button>Reject</button>
              <button
                onClick={event => {
                  event.preventDefault();

                  return createChatroom({
                    variables: { requestId: request.id },
                    update: (cache, { data: { createChatroom } }) => {
                      {
                        const chatroom = createChatroom.chatroom;

                        if (chatroom) {
                          const data = cache.readQuery({
                            query: COUNSELOR
                          });

                          console.log({ chatroom, data });
                          cache.writeQuery({
                            query: COUNSELOR,
                            data: {
                              me: {
                                ...data.me,
                                chatrooms: [
                                  ...data.me.chatrooms.concat(chatroom)
                                ]
                              }
                            }
                          });
                        }
                      }
                    }
                  });
                }}
              >
                Start
              </button>
            </>
          )}
        </Mutation>
      </>
    ));

  return (
    <>
      <h1>Chat Request</h1>
      <Query query={ME_WITH_REQUEST}>
        {({ data, error, loading, subscribeToMore }) => {
          if (loading) return "...Loading";
          if (!data.me) return null;

          return (
            <>
              {requestsToRender(data.me.pendingRequests)}
              <NewRequestSubscription subscribeToMore={subscribeToMore} />
              <UnresponsiveRequestSubscription
                subscribeToMore={subscribeToMore}
              />
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Request;
