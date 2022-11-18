const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const mongoose = require('mongoose');
const mainRouter = require('./router/mainRouter');
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('welcome');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

mongoose
  .connect(process.env.MONGO_KEY)
  .then(() => {
    console.log('Duombaze prijungta');
  })
  .catch((error) => {
    console.log('error', error);
  });

server.listen(3000, () => {
  console.log('listening on port:3000');
});

app.use(cors());
app.use(express.json());

app.use('/', mainRouter);
