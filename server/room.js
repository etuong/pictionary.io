const ROUND = require("./round");

class ROOM {
  constructor(options) {
    this.id = options.id;
    this.name = options.name;
    this.isPrivate = options.isPrivate || false;
    this.password = options.password || "";
    this.maxPlayers = options.maxPlayers || 8;
    this.players = [...options.players] || [];
    this.queue = [...options.players] || [];
    this.roundTime = options.roundTime || 120;
    this.wordTime = options.wordTime || 25;
    this.points =
        {
          ...options.points,
        } || {};
    this.painter = null;
    this.round = null;
    this.words = this.initializeWords();
  }

  initializeWords() {
    var fs = require('fs');
    var words = fs.readFileSync('words.txt', 'utf8');
    return words.split(', ');
  }

  async initRound() {
    const set = new Set();
    while (set.size !== 3) {
      set.add(Math.floor((Math.random() * this.words.length)));
    }
    const words = [];
    set.forEach(index => words.push(this.words[index]));

    this.setPainter();
    io.to(this.painter).emit("round_initialized", words);

    let time = this.wordTime;
    io.to(this.id).emit("countdown_painter", time);
    let interval = setInterval(() => {
      if (this.players.length > 1) {
        if (time <= 0) {
          CHAT.sendServerMessage(
              this.id,
              `Painter didn't chose the word, skipping the round.`
          );
          this.initRound();
          clearInterval(interval);
        } else if (this.round != null) {
          clearInterval(interval);
        }
        time--;
        if (time >= 0) io.to(this.id).emit("countdown_painter", time);
      }
    }, 1000);
  }

  countDown(time) {
    io.to(this.id).emit("countdown", time);
    let interval = setInterval(() => {
      if (time <= 0) {
        CHAT.sendServerMessage(
            this.id,
            `No one guessed the word. The word was: ${this.round.word}`
        );
        this.stopRound();
        clearInterval(interval);
      } else if (this.round == null) {
        clearInterval(interval);
      } else {
        time--;
        io.to(this.id).emit("countdown", time);
      }
    }, 1000);
  }

  startRound(word) {
    if (this.players.length > 1) {
      this.round = new ROUND(word);
      io.to(this.id).emit("round_started");
      io.to(this.painter).emit("receive_password", word);
      CHAT.sendServerMessage(this.id, `Round started!`);
      CHAT.sendCallbackID(this.painter, `The secret word is: ${word}`);
      this.countDown(this.roundTime);
    } else {
      CHAT.sendCallbackID(
          this.painter,
          `You need at least 2 players to start the game!`
      );
    }
  }

  stopRound() {
    this.round = null;
    this.clearBoard();
    io.to(this.id).emit("round_stopped");
    CHAT.sendServerMessage(this.id, `Round finished!`);
    io.to(this.id).emit("countdown", 0);

    // Restart
    this.initRound();
  }

  clearBoard() {
    if (this.round != null) {
      this.round.clearLines();
    }
    io.to(this.id).emit("clear");
  }

  setPainter() {
    if (this.players.length == 0) return false;

    let newPainter;
    do {
      newPainter = this.queue.pop();
      this.queue.unshift(newPainter);
    } while (this.painter == newPainter);
    this.painter = newPainter;

    io.to(this.id).emit("painter_changed", newPainter);
    CHAT.sendCallbackID(this.painter, "You are a new painter!");

    return true;
  }

  addPlayer({id}) {
    this.players.push(id);
    this.points[id] = 0;
    this.queue.unshift(id);
    this.updatePlayers();
  }

  removePlayer({id, name}) {
    this.players.splice(this.players.indexOf(id), 1);
    this.queue.splice(this.queue.indexOf(id), 1);

    // If player who left was a painter, replace him.
    if (this.painter == id) {
      this.stopRound();
      CHAT.sendServerMessage(
          this.id,
          `Painter (${name}) left the game, choosing another painter...`
      );
    }

    this.updatePlayers();

    // Return if room is empty
    return this.players.length == 0 ? true : false;
  }

  givePoints({id}, points = 1) {
    this.points[id] += points;
    this.updatePlayers();
  }

  updatePlayers() {
    io.to(this.id).emit("receive_players", this.getPlayers());
  }

  getPlayers() {
    let players = [];
    for (let player of this.players) {
      players.push({
        id: player,
        points: this.points[player] || 0,
        name: io.sockets.sockets[player].name || player,
      });
    }
    return players;
  }
}

module.exports = ROOM;
