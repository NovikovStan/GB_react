import React from "react";

export default class App extends React.Component {
  state = {
    text: "First component"
  };
  render() {
    setTimeout(() => {
      this.setState({ text: "Text changed" });
    }, 3000);
    return <h1>{this.state.text}</h1>;
  }
}
