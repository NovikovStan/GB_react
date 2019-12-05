import React from "react";
import Message from "./Message";
import "../styles/styles.css";

export default class MessageField extends React.Component {
  state = {
    messages: [
      { author: "user", text: "Привет!" },
      { author: "user", text: "Как дела?" }
    ]
  };

  componentDidUpdate() {
    if (this.state.messages[this.state.messages.length - 1].author === "user") {
      setTimeout(
        () =>
          this.setState({
            messages: [
              ...this.state.messages,
              { author: "robot", text: "Не приставай ко мне, я робот!" }
            ]
          }),
        1000
      );
    }
  }

  handleInputEvent = (event, message) => {
    if (event.keyCode === 13 || ( event.target.className === "sendButton" && event.type === "click")) {
      // Enter
      this.setState({
        messages: [...this.state.messages, { author: "user", text: message}]
      });
    }
  };

  render() {
    const messageElements = this.state.messages.map((message, index) => (
      //   <Message key={index} author={message.author} text={message.text} />
      <Message key={index} message={message} />
    ));

    return (
      <div className="layout">
        <div className="message-field">{messageElements}</div>
        <div className="inputUI">
          <input
            onKeyUp={event => this.handleInputEvent(event, "Нормально")}
            className="input-field"
          />
          <button onClick={event => this.handleInputEvent(event, "Нормально")} className="sendButton">Отправить сообщение</button>
        </div>
      </div>
    );
  }
}
