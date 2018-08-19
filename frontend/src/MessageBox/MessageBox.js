import React, { Component } from 'react';
import './MessageBox.css';

class MessageBox extends Component {
  constructor(props) {
    super(props);

    this.state = {messages: ['yo', 'hey']}
  }

  render() {
    return (
      <div className="MessageBox">
        <ul>
          {this.state.messages.map(message => {
            return <li>{message}</li>
          })}
        </ul>
        <form className="InputBox">
        <input placeholder="chat..."/>
        </form>
      </div>
    );
  }
}

export default MessageBox;