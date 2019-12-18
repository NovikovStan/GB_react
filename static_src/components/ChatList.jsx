import React from "react";
import { List, ListItem } from "material-ui/List";
import { Link } from "react-router-dom";
import ContentSend from "material-ui/svg-icons/content/send";
import Divider from "material-ui/Divider";
import Subheader from "material-ui/Subheader";
import "../styles/styles.css";

const ChatList = () => (
  <div className="chart-list">
    <List>
      <Subheader style={{ fontSize: "22px" }}>Chat list:</Subheader>
      <Divider />
      <Link to="/chat/1">
        <ListItem primaryText="Chatroom1" leftIcon={<ContentSend />} />
      </Link>
      <Link to="/chat/2">
        <ListItem primaryText="Chatroom2" leftIcon={<ContentSend />} />
      </Link>
      <Link to="/chat/3">
        <ListItem primaryText="Chatroom3" leftIcon={<ContentSend />} />
      </Link>
    </List>
  </div>
);

export default ChatList;
