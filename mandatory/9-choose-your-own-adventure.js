/*
Create a "Choose Your Own Adventure" game using an object. In these kind of
games, the player is in a room and can move to other rooms to the north, east,
south or west.

It has a currentRoom property to store which room the player is in.

Give your object methods for:

- Starting the game in the correct room when passed a room name parameter
- Moving the player to another room when passed a direction parameter

The functionality for running a game has been provided for you. It first prompts
the player to enter the starting room. Then it will ask players to to type in a
direction (north/east/south/west) that they want to move in.

Several room objects have also been provided for you. Take your time to read
them carefully. The rooms look something like this:
+-----------+-----------+
|           |           |
|   Hall    | Classroom |
|           |           |
+-----------------------+
|           |
|  Library  |
|           |
+-----------+

----------------------------------------------------------

Stretch goal: what happens if you try to move in a direction that the current
room doesn't allow? For example if you are in the Classroom and you try to move
east? If there is a bug in your code, try to fix it.
*/

let game = {
  currentRoom: null,

  start: function (roomName) {
    // This function is called code provided for you. It passes the name of the
    // room that the player wants to start in.
    // Finish the function so that the currentRoom property is set to the room
    // object for the correct room.
    // Hint: the only valid rooms are "hall", "classroom" and "library".
  },

  move: function (direction) {
    // This function is called by the code provided for you. It passes the
    // direction that the player wants to move.
    // Finish the function so that the currentRoom property is updated with new
    // room in the direction that the player wants to move in.
    // Hint: the room objects have north/east/south/west methods which return
    // a new room object that is in the relevant direction.
  },
};

/*
DO NOT EDIT BELOW THIS LINE
*/

let hallRoom = {
  name: "Hall",
  north: function () {
    return null;
  },
  east: function () {
    return classRoom;
  },
  south: function () {
    return libraryRoom;
  },
  west: function () {
    return null;
  },
};

let classRoom = {
  name: "Classroom",
  north: function () {
    return null;
  },
  east: function () {
    return null;
  },
  south: function () {
    return null;
  },
  west: function () {
    return hallRoom;
  },
};

let libraryRoom = {
  name: "Library",
  north: function () {
    return hallRoom;
  },
  east: function () {
    return null;
  },
  south: function () {
    return null;
  },
  west: function () {
    return null;
  },
};

/*
YOU ARE NOT EXPECTED TO UNDERSTAND THE CODE BELOW THIS 
LINE!

You only need to read it if you are interested in how it works.
*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function start() {
  rl.question(
    "Which room would you like to start in? (hall/classroom/library) ",
    function (room) {
      game.start(room);
      console.log("\n---------------------\n");
      play();
    }
  );
}

function play() {
  console.log(`You are in the ${game.currentRoom.name}.\n`);
  rl.question(
    "Which direction would you like to move? (north/east/south/west) ",
    function (direction) {
      game.move(direction);
      console.log("\n---------------------\n");
      play();
    }
  );
}

start();
