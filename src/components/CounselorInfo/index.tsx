import React from "react";
import { useMeQuery } from "../../generated/graphql";

const CounselorInfo = () => {
  const { loading, error, data } = useMeQuery();

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log({ data });

  return (
    <div>
      <div>Email: {data?.me.email}</div>
    </div>
  );
};

export default CounselorInfo;
