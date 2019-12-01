import React from "react";
import PropTypes from "prop-types";

export default class Message extends React.Component {
//   static propTypes = {
//     message.author: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired
//   };

  render() {
  return <div>{this.props.message.author}: {this.props.message.text}</div>;
  }
}
