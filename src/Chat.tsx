import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');

  const socket = io('https://teste-api-chat-js.onrender.com', {
    transports: ['websocket'],
    autoConnect: false
  });

  socket.connect();

  useEffect(() => {
    socket.on('connect', () => {
      setMessages((prevMessages) => [...prevMessages, "Connect"]);
    });
    socket.on('connect_error', (data: any) => {
      setMessages((prevMessages) => [...prevMessages, data?.message ?? "connect_error"]);
    });
    socket.on('connect_timeout', (data: any) => {
      setMessages((prevMessages) => [...prevMessages, data?.message ?? "connect_timeout"]);
    });
    socket.on('connecting', (data: any) => {
      setMessages((prevMessages) => [...prevMessages, data?.message ?? "connecting"]);
    });
    socket.on('error', (data: any) => {
      setMessages((prevMessages) => [...prevMessages, data?.message ?? "error"]);
    });
    socket.on('receiveMessage', (newMessage: string) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    // return () => {
    //   //socket.off('receiveMessage');
    // };
  }, []);

  const sendMessage = () => {
    socket.emit('sendMessage', message);
    setMessage('');
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
