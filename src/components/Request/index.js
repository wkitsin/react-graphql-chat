import React from "react";
import { Query } from "react-apollo";
import { ME_WITH_REQUEST } from "./graphql";

const Request = () => {
  const requestsToRender = requests =>
    requests.map(request => (
      <>
        <p>Requster's Email: {request.user.email}</p>
        <p>Interest: {request.interest.name}</p>
        <p>Status: {request.status}</p>
      </>
    ));

  return (
    <>
      <h1>Chat Request</h1>
      <Query query={ME_WITH_REQUEST}>
        {({ data, error, loading }) => {
          if (loading) return "...Loading";
          if (!data.me) return null;

          return requestsToRender(data.me.requests);
        }}
      </Query>
    </>
  );
};

export default Request;
