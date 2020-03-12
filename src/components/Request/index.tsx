import React from "react";
import {
  useCreateChatroomMutationMutation,
  useChatRequestSubscription,
  useUnresponsiveRequestSubscription,
  useMeQuery,
  MeDocument
} from "../../generated/graphql";

const Request = () => {
  const { data } = useMeQuery();

  const [addChatroom] = useCreateChatroomMutationMutation({
    update: (client, mutationResult) => {
      const { me } = client.readQuery({ query: MeDocument });
      const { chatroom } = mutationResult.data.createChatroom;

      if (me) {
        client.writeQuery({
          query: MeDocument,
          data: {
            me: { ...me, chatrooms: [...me.chatrooms, chatroom] }
          }
        });
      }
    }
  });

  const {} = useChatRequestSubscription({
    onSubscriptionData: ({ client, subscriptionData }) => {
      if (subscriptionData) {
        const { chatRequest } = subscriptionData.data;
        const { me } = client.readQuery({ query: MeDocument });

        if (me) {
          client.writeQuery({
            query: MeDocument,
            data: {
              me: {
                ...me,
                pendingRequests: [...me.pendingRequests, chatRequest]
              }
            }
          });
        }
      }
    }
  });

  const {} = useUnresponsiveRequestSubscription({
    onSubscriptionData: ({ client, subscriptionData }) => {
      if (subscriptionData) {
        const { unresponsiveRequest } = subscriptionData.data;
        const { me } = client.readQuery({ query: MeDocument });

        const requests = me.pendingRequests.filter(
          request => request.id != unresponsiveRequest.id
        );

        if (me) {
          client.writeQuery({
            query: MeDocument,
            data: {
              me: { ...me, pendingRequests: requests }
            }
          });
        }
      }
    }
  });

  const requestsToRender = requests =>
    requests.map((request, index) => (
      <div key={index}>
        <div style={{ fontSize: 30 }}>Request: {request.id}</div>
        <div>Requester's Email: {request.user.email}</div>
        <div>Interest: {request.interest.name}</div>
        <div>Status: {request.status}</div>
        <button
          onClick={() =>
            addChatroom({
              variables: { requestId: request.id }
            })
          }
        >
          START CHAT
        </button>
      </div>
    ));

  if (!data) return <div>Loading ...</div>;

  return (
    <div style={{ margin: 20 }}>
      <div style={{ fontSize: 20 }}>Your current Chat Request</div>
      <>{requestsToRender(data.me.pendingRequests)}</>
    </div>
  );
};

export default Request;
