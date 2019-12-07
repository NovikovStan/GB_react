import React from "react";
import { List, ListItem } from "material-ui/List";
import ContentSend from "material-ui/svg-icons/content/send";
import Divider from "material-ui/Divider";
import Subheader from "material-ui/Subheader";
import "../styles/styles.css";

const ChartList = () => (
  <div className="chart-list">
    <List>
      <Subheader style={{ fontSize: "22px" }}>Chat list:</Subheader>
      <Divider />
      <ListItem primaryText="Chatroom1" leftIcon={<ContentSend />} />
      <ListItem primaryText="Chatroom2" leftIcon={<ContentSend />} />
      <ListItem primaryText="Chatroom3" leftIcon={<ContentSend />} />
      <ListItem primaryText="Chatroom4" leftIcon={<ContentSend />} />
      <ListItem primaryText="Chatroom5" leftIcon={<ContentSend />} />
    </List>
  </div>
);

export default ChartList;

