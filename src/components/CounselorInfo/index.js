import React from "react";
import { Query } from "react-apollo";
import { ME } from "./graphql";

const CounselorInfo = () => {
  return (
    <div>
      <Query query={ME}>
        {({ data, loading, error }) => {
          if (loading) return "...Loading";
          if (!data.me) return null;

          return <h1>Email: {data.me.email}</h1>;
        }}
      </Query>
    </div>
  );
};

export default CounselorInfo;
