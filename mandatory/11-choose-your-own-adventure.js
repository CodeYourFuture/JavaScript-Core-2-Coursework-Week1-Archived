/*
Create a "Choose Your Own Adventure" game using an object. In these kind of
games, the player is in a room and can move to other rooms to the north, east,
south or west.

To start the game, run this file with Node as usual. To stop the game, press
Ctrl-C.

It has a currentRoom property to store which room the player is in.

Give your object methods for:

- Starting the game in the correct room when passed a room name parameter
- Moving the player to another room when passed a direction parameter

The functionality for running a game has been provided for you. It first prompts
the player to enter the starting room. Then it will ask players to to type in a
direction (north/east/south/west) that they want to move in.

An object containing one object per room has been provided for you. Take your
time to read it carefully. The rooms look something like this:
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
const validRooms = ["hall", "classroom", "library"];

let game = {
  currentRoom: null,

  start: function (roomName) {
    // This function is called with the name of the room that the player wants
    // to start in.
    // Finish the function so that the currentRoom property is set to the room
    // object for the correct room.
    //
    // Hint: the only valid rooms are "hall", "classroom" and "library".
    
    // console.log(roomName)
    // console.log(this.currentRoom)
    // const replace = {currentRoom: roomName}
    // const returnedTarget = Object.assign(this.currentRoom, replace);
    // console.log(this.currentRoom)

    if (validRooms.includes(roomName)){
      console.log(roomName)
      this.currentRoom = `${roomName}`;
      console.log(this.currentRoom)
    } else {
      console.log("Invalid room name, please try again !");
    }
   

  },

  move: function (direction) {
    // This function is called with the direction that the player wants to move.
    // Finish the function so that the currentRoom property is updated with new
    // room in the direction that the player wants to move in.
    //
    //console.log("2nd : " + this.currentRoom)
    
    let roomArray = {
      hall : {
        east : "classroom",
        south : "library",
      },
      classroom : {
        west : "hall",
      },
      library : {
        north : "hall",
      }
    }

    var possibleMovements = Object.keys(roomArray[this.currentRoom]);
    var possibleMovementsRoomName = Object.values(roomArray[this.currentRoom]);
    console.log("Movements Available : " + possibleMovements);
    
    if (possibleMovements.includes(direction)){
      console.log("Can do that")
      var movementsIndex = possibleMovements.indexOf(direction);
        //console.log("movementsIndex " + movementsIndex)
        //console.log(possibleMovementsRoomName[movementsIndex]);
      this.currentRoom = possibleMovementsRoomName[movementsIndex];
      
    } else {
      console.log("Can't do that unfortunately")
    }
  },
};

/*
DO NOT EDIT BELOW THIS LINE
*/

let rooms = {
  hall: {
    name: "hall",
    north: function () {
      return null;
    },
    east: function () {
      return rooms.classroom;
    },
    south: function () {
      return rooms.library;
    },
    west: function () {
      return null;
    },
  },
  classroom: {
    name: "classroom",
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
      return rooms.hall;
    },
  },
  library: {
    name: "library",
    north: function () {
      return rooms.hall;
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
      play("start");
    }
  );
}

function play(method) {
  if (!game.currentRoom && !game.currentRoom) {
    start();
    console.log(`Invalid room name, please try again !`);
  }
  console.log(`You are in the ${game.currentRoom}.\n`);
  rl.question(
    "Which direction would you like to move? (north/east/south/west) ",
    function (direction) {
      game.move(direction);
      console.log("\n---------------------\n");
      play("move");
    }
  );
}

start();
