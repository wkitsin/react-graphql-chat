import React from "react";
import { client } from "./apollo";
import { ApolloProvider } from "react-apollo";
import UserInfo from "../../components/UserInfo";
import UserChat from "../../components/UserChat";

const Users = () => {
  return (
    <ApolloProvider client={client}>
      <UserInfo />
      <UserChat />
    </ApolloProvider>
  );
};

export default Users;
