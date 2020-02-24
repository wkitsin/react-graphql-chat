import React from "react";
import { Query } from "react-apollo";
import { USER } from "./graphql";
import NoAvailableCounselorsSubscription from "./NoAvailableCounselors";

const UserInfo = () => {
  return (
    <div>
      <Query query={USER}>
        {({ data, loading, error, subscribeToMore }) => {
          if (loading) return "...Loading";
          if (!data.me) return null;

          return (
            <>
              <h1>Email: {data.me.email}</h1>
              <NoAvailableCounselorsSubscription
                subscribeToMore={subscribeToMore}
              />
            </>
          );
        }}
      </Query>
    </div>
  );
};

export default UserInfo;
