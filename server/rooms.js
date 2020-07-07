const createID = require("uniqid");
const ROOM = require("./room");

var ROOMS = {};

const CREATE_ROOM = function (socket, options) {
  let roomID = createID();

  let room = new ROOM({
    id: roomID,
    name: options.name,
    isPrivate: options.isPrivate || false,
    password: options.password || "",
    maxPlayers: options.maxPlayers || 8,
    roundTime: options.roundTime || 80,
    wordTime: options.wordTime || 25,
    players: [],
    points: {},
    created: true,
  });

  ROOMS[roomID] = room;
  socket.name = "Host";
  room.addPlayer(socket);
  socket.join(roomID);

  // Emit a message to route to the Room view
  socket.emit("room_created", roomID);

  UPDATE_ROOMS();

  room.initRound();
};

const GET_ROOMS = function () {
  let rooms = [];
  for (let room in ROOMS) {
    rooms.push(
        Object.assign(ROOMS[room], {
          id: room,
        })
    );
  }
  return rooms;
};

const UPDATE_ROOMS = function () {
  // Emit to all sockets to update the rooms in Rooms view
  io.emit("receive_rooms", GET_ROOMS());
};

const GET_ROOM = function (id) {
  return ROOMS[id];
};

const JOIN_ROOM = function (socket, id, password) {
  let room = ROOMS[id];
  let flag = true;

  if (typeof room == "undefined") {
    socket.emit("join_room_error", "This room doesn't exist");
    return false;
  }

  if (room.players.includes(socket.id)) {
    return false; // You're already in this room;
  }

  if (room.players.length == room.maxPlayers) {
    var msg = "There is max amount of players.";
    flag = false;
  }

  if (room.isPrivate) {
    if (room.password != password) {
      var msg = "Wrong password";
      flag = false;
    }
  }

  if (!flag) {
    socket.emit("join_room_error", msg);
    return false;
  }

  socket.join(id);
  ROOMS[id].addPlayer(socket);
  UPDATE_ROOMS();

  return true;
};

const LEAVE_ROOM = function (socket) {
  let rooms = GET_ROOMS();

  if (rooms.length == 0) {
    return;
  }

  for (let room of rooms) {
    for (let player of room.players) {
      if (player == socket.id) {
        let isEmpty = ROOMS[room.id].removePlayer(socket);
        if (isEmpty) {
          delete ROOMS[room.id];
        }
        UPDATE_ROOMS();
        socket.leave(room.id);
        console.log(`Player ${socket.name} has left room ${room.name}`);
      }
    }
  }
};

// Get the room where the player is in
const GET_SOCKET_ROOM = function (socket) {
  for (let room of GET_ROOMS()) {
    for (let player of room.players) {
      if (player == socket.id) {
        return room;
      }
    }
  }

  return false;
};

const GIVE_POINTS = function (socket) {
  let room = GET_SOCKET_ROOM(socket);
  if (room) {
    room.givePoints(socket);
  }
};

module.exports = {
  createRoom: CREATE_ROOM,
  getRooms: GET_ROOMS,
  getRoom: GET_ROOM,
  joinRoom: JOIN_ROOM,
  leaveRoom: LEAVE_ROOM,
  getSocketRoom: GET_SOCKET_ROOM,
  givePoints: GIVE_POINTS,
};
