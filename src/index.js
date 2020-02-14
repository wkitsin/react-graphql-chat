import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import UserInfo from "./components/UserInfo";
import Chat from "./components/Chat";
import { client } from "./apollo";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <UserInfo />
      <Chat />
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
