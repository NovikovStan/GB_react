import React from "react";
import ReactDOM from "react-dom";

let messages = ["Привет", "Как дела?"];

const MessageComponent = props => <div>{props.text}</div>;

const MessageField = props => {
  return props.messages.map((message, index) => (
    <MessageComponent key={index} text={message} />
  ));
};

const AddMsg = props => {
  let msgs = [...props.messages];
  msgs.push("Нормально");
  return (
    <button
      onClick={function() {
        ReactDOM.render(
          <div>
            <MessageField messages={msgs} />
            <AddMsg messages={msgs}></AddMsg>
          </div>,
          document.getElementById("root")
        );
      }}
    >
      Add
    </button>
  );
};

ReactDOM.render(
  <div>
    <MessageField messages={messages} />
    <AddMsg messages={messages}></AddMsg>
  </div>,
  document.getElementById("root")
);
