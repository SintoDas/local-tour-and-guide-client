import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Listen for incoming chat messages
    socket.on("chatMessage", (data) => {
      setMessages([...messages, data]);
    });

    // Clean up the socket connection on component unmount
    return () => socket.disconnect();
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      const messageData = {
        text: newMessage,
        user: "User",
        timestamp: new Date(),
      };

      // Emit the chat message to the server
      socket.emit("chatMessage", messageData);

      setMessages([...messages, messageData]);
      setNewMessage("");
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <p>
              {message.user}: {message.text}
            </p>
            <small>{new Date(message.timestamp).toLocaleTimeString()}</small>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
