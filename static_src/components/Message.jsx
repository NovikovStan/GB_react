import React from "react";
import "../styles/styles.css";

export default class Message extends React.Component {
  render() {
    return (
      <div className={this.props.sender === 'bot' ? 'message robot-msg' : 'message user-msg'}>
        {this.props.sender}: {this.props.text}
      </div>
    );
  }
}
