import React from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./apollo";
import CounselorInfo from "../../components/CounselorInfo";
import Request from "../../components/Request";
import CounselorChat from "../../components/CounselorChat";

const Counselors = () => {
  return (
    <ApolloProvider client={client}>
      <CounselorInfo />
      <CounselorChat />
      <hr />
      <Request />
    </ApolloProvider>
  );
};

export default Counselors;
