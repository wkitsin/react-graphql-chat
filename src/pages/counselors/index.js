import React from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./apollo";
import CounselorInfo from "../../components/CounselorInfo";
import Request from "../../components/Request";

const Counselors = () => {
  return (
    <ApolloProvider client={client}>
      <CounselorInfo />
      <Request />
    </ApolloProvider>
  );
};

export default Counselors;
