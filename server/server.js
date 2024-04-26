const express = require('express');
const { createServer } = require('http');
const { join } = require('path');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = createServer(app);
const io = new Server(server);

// Use the cors middleware with specific configuration
app.use(cors({
  origin: 'http://localhost:3000/#/login',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(5000, () => {
  console.log('server running at http://localhost:5000');
});
