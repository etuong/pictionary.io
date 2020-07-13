const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const cors = require('cors');
const ROOMS = require("./rooms");
const CHAT = require("./chat");

global.io = io;
global.CHAT = CHAT;

app.get("/", (req, res) => {
  res.redirect('https://etuong.github.io/pictionary.io');
});
app.use(cors());

io.on("connection", socket => {
  socket.name = socket.id;

  socket.on("disconnect", () => {
    ROOMS.leaveRoom(socket);
  });

  // Create a new room
  socket.on("create_room", options => {
    ROOMS.createRoom(socket, options);
    console.log(`Room ${options.name} is created`);
  });

  // Get all rooms
  socket.on("get_rooms", () => {
    socket.emit("receive_rooms", ROOMS.getRooms());
  });

  // Get room
  socket.on("get_room", id => {
    socket.emit("receive_room", ROOMS.getRoom(id));
  });

  // Create new player, set socket's name as name of the player
  socket.on("join_room", data => {
    socket.name = data.name;
    let room = ROOMS.getRoom(data.id);
    room.updatePlayers();
    if (ROOMS.joinRoom(socket, data.id, data.password)) {
      // Broadcast to everyone in this room about the new player
      CHAT.sendServerMessage(data.id, `${socket.name} has joined the game!`);
      if (room.round != null) {
        socket.emit('getPainting', ROOMS.getRoom(data.id).round.lineHistory);
      }
    }
    console.log(`New player ${data.name} has joined room ${room.name}`);
  });

  socket.on("leave_room", () => {
    ROOMS.leaveRoom(socket);
  });

  socket.on("send_message", msg => {
    let room = ROOMS.getSocketRoom(socket);
    if (room) {
      CHAT.sendMessage(room.id, {
        msg,
        sender: socket.name
      });

      if (room.round != null && socket.id != room.painter) {
        // Checking if the message is correct
        if (room.round.check(msg)) {
          ROOMS.givePoints(socket);
          CHAT.sendCallback(socket, {
            self: `Congratulations! You've guessed the word!`,
            broadcast: `${socket.name} guessed the word (${room.round.word}) and earned 1 point!`
          });
          socket.to(room.id).emit('play_audio');
          room.stopRound();
        } else {
          if (room.round.isClose(msg)) {
            CHAT.sendCallback(socket, {
              self: `You're so close!`
            });
          }
        }
      }
    }
  });

  socket.on("paint", (paintObj) => {
    let room = ROOMS.getSocketRoom(socket);
    if (room.painter == socket.id && room.round != null) {
      socket.to(room.id).emit('paint', paintObj);
      room.round.addLine(paintObj);
    }
  });

  socket.on("clear", () => {
    let room = ROOMS.getSocketRoom(socket);
    if (room.painter == socket.id && room.round != null) {
      room.clearBoard();
    }
  });

  socket.on("word_chosen", word => {
    let room = ROOMS.getSocketRoom(socket);
    if (room.painter == socket.id && room.round == null) {
      console.log(`Selected word is ${word}`);
      room.startRound(word);
    }
  });
});

let port = process.env.PORT || 5050;

http.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

process.on("exit", function (code) {
  http.close();
  console.log("Server exit", code);
});