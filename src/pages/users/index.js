import React from "react";
import { client } from "./apollo";
import { ApolloProvider } from "react-apollo";
import UserInfo from "../../components/UserInfo";
import Chat from "../../components/Chat";

const Users = () => {
  return (
    <ApolloProvider client={client}>
      <UserInfo />
      <Chat userType={"User"} />
    </ApolloProvider>
  );
};

export default Users;
