import React from "react";
import { ApolloProvider } from "react-apollo";
import Chat from "../../components/Chat";
import { client } from "./apollo";
import CounselorInfo from "../../components/CounselorInfo";

const Counselors = () => {
  return (
    <ApolloProvider client={client}>
      <CounselorInfo />
      <Chat userType={"Counselor"} />
    </ApolloProvider>
  );
};

export default Counselors;
