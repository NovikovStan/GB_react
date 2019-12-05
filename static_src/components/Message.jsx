import React from "react";
import "../styles/styles.css";

export default class Message extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.message.author === "robot"
            ? "robot-msg message"
            : "user-msg message"
        }
      >
        {this.props.message.author}: {this.props.message.text}
      </div>
    );
  }
}
