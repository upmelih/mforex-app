import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';

const ChatComponent = () => {
  const inputRef = useRef(null);
  const messagesRef = useRef(null);
  const socket = io.connect('http://localhost:5000');

  useEffect(() => {
    const form = document.getElementById('form');
    const input = inputRef.current;
    const messages = messagesRef.current;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
      }
    });

    socket.on('chat message', (msg) => {
      const item = document.createElement('li');
      item.textContent = msg;
      messages.appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <ul ref={messagesRef}></ul>
      <form id="form" action="">
        <input ref={inputRef} autoComplete="off" /><button>Send</button>
      </form>
    </>
  );
};

export default ChatComponent;
