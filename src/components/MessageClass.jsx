import React, { Component } from 'react';

class MessageClass extends Component {
  render() {
    return (
      <div className="bg-green-100 p-4">
        <p className="text-green-800 font-semibold">MessageClass {this.props.text}</p>
      </div>
    );
  }
}

export default MessageClass;
