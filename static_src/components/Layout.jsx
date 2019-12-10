import MessageField from "./MessageField";
import ChatList from "./ChatList";
import Header from "./Header";
import React from "react";
import "../styles/styles.css";

const Layout = () => (
    <div>
      <Header></Header>
      <div className="main">
        <ChatList></ChatList>
        <MessageField></MessageField>
      </div>
    </div>
);

export default Layout;
