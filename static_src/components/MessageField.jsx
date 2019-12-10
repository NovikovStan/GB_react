import React from "react";
import { TextField, FloatingActionButton } from "material-ui";
import SendIcon from "material-ui/svg-icons/content/send";
import Message from "./Message";
import "../styles/styles.css";

export default class MessageField extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  state = {
    messages: [
      { author: "robot", text: "Привет!" },
      { author: "robot", text: "Как дела?" }
    ]
  };

  componentDidUpdate() {
    // console.log('updated input:', this.state.input);

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

  handleChange = event => {
    if (event.keyCode === 13 || event.currentTarget.type === "button") {
      if (this.textInput.current.input.value != "") {
        this.setState({
          messages: [
            ...this.state.messages,
            { author: "user", text: this.textInput.current.input.value }
          ]
        });
        this.textInput.current.input.value = "";
      }
    }
  };

  render() {
    const messageElements = this.state.messages.map((message, index) => (
      <Message key={index} message={message} />
    ));

    return (
      <div className="chat">
        <div className="message-field">{messageElements}</div>
        <div className="user-input">
          <TextField
            name="input"
            fullWidth={true}
            hintText="Введите сообщение"
            style={{ fontSize: "22px" }}
            onKeyUp={this.handleChange}
            autoComplete="off"
            ref={this.textInput}
          />
          <FloatingActionButton onClick={this.handleChange}>
            <SendIcon />
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}
