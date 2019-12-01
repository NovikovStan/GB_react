import React from "react";
import Message from "./Message";

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

  handleClick = () => {
    this.setState({
      messages: [...this.state.messages, { author: "user", text: "Нормально" }]
    });
  };

  render() {
    const messageElements = this.state.messages.map((message, index) => (
      //   <Message key={index} author={message.author} text={message.text} />
      <Message key={index} message={message} />
    ));

    return (
      <div>
        {messageElements}
        <button onClick={this.handleClick}>Отправить сообщение</button>
      </div>
    );
  }
}
