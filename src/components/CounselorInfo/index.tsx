import React from "react";
import { useMeQuery } from "../../generated/graphql";

const CounselorInfo = () => {
  const { loading, error, data } = useMeQuery();
  if (!data) return <div>Loading ...</div>;
  if (error) return null;

  return (
    <div>
      <div style={{ margin: 10 }}>Email: {data.me.email}</div>
    </div>
  );
};

export default CounselorInfo;
