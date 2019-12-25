import React from 'react';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List';
import AddIcon from 'material-ui/svg-icons/content/add';
import ContentSend from 'material-ui/svg-icons/content/send';
import { addChat } from '../actions/chatActions';


class ChatList extends React.Component {
 
  // handleChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  // handleKeyUp = event => {
  //   if (event.keyCode === 13) {
  //     // Enter
  //     this.handleAddChat();
  //   }
  // };

  handleAddChat = () => {
    this.props.addChat();
  };

  render() {
    const { chats } = this.props.chats;
    const chatElements = Object.keys(chats).map(chatId => (
      <Link key={chatId} to={`/chat/${chatId}`}>
        <ListItem
          primaryText={chats[chatId].title}
          leftIcon={<ContentSend />}
        />
      </Link>
    ));

    return (
      <List>
        {chatElements}
        <ListItem
          key="Add new chat"
          leftIcon={<AddIcon />}
          onClick={this.handleAddChat}
          style={{ height: "60px" }}
        />
      </List>
    );
  }
}

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);