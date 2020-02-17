import React from "react";
import { Query } from "react-apollo";
import { USER } from "./graphql";

const UserInfo = () => {
  return (
    <div>
      <Query query={USER}>
        {({ data, loading, error }) => {
          if (loading) return "...Loading";
          if (!data.me) return null;

          return <h1>Email: {data.me.email}</h1>;
        }}
      </Query>
    </div>
  );
};

export default UserInfo;
