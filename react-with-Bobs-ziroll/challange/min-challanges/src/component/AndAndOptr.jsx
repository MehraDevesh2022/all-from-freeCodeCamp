import React from "react";

export default function AndOptr() {
  const [messages, setMessages] = React.useState(["a", "b"]);
  /**
   * Challenge:
   * - Only display the <h1> below if there are unread messages
   */
  return (
    <div>
     {messages &&  messages.map(msg => ( <h1>You have {msg} unread messages!</h1>))}
    </div>
  );
}
