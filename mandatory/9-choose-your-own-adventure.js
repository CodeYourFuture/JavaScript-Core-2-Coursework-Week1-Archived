/*
Create a "Choose Your Own Adventure" game using an object. In these kind of
games, the player is in a room and can move to other rooms to the north, east,
south or west.

It will need a currentRoom property to store which room the player is in.

Give your object methods for:

- Starting the game in the room object that is passed as a parameter
- Moving the player to another room when passed a direction parameter

Some skeleton code has been provided for you below, as well as several room
objects. Take your time to read the code carefully.

--------------------------------------------------------------------------------

Stretch goal: what happens if you try to move in a direction that the current
room doesn't allow? For example if you are in the Classroom and you try to move
east? If there is a bug in your code, try to fix it.
*/

let game = {
  currentRoom: null,

  start: function (startingRoom) {
    // Calling this function should set the currentRoom for the game
    // Hint: it should be called with the room *object*, not the name string
  },

  move: function (direction) {
    console.log(`You are in the ${this.currentRoom.name}.\n`);

    // Calling this function will move from one room to another based on the
    // direction argument
    // Hint: the direction argument will be: "north", "east", "south" or "west"

    console.log(`---------------------\n`);
  },
};

/*
DO NOT EDIT BELOW THIS LINE
*/

/*
The rooms look something like this:
+-----------+-----------+
|           |           |
|   Hall    | Classroom |
|           |           |
+-----------------------+
|           |
|  Library  |
|           |
+-----------+
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
Play an example game to check that it works.
*/
game.start(hallRoom);
assertRoom("Hall");

game.move("south");
assertRoom("Library");

game.move("north");
assertRoom("Hall");

game.move("east");
assertRoom("Classroom");

/*
Check we are in the correct room.
YOU ARE NOT EXPECTED TO UNDERSTAND THIS CODE
*/
function assertRoom(expected) {
  if (!game.currentRoom) {
    throw new Error("You aren't in a room yet!\n");
  }

  if (game.currentRoom.name !== expected) {
    throw new Error(
      `You're in the wrong room!\n\nExpected room: ${expected}.\nActual room: ${game.currentRoom.name}\n`
    );
  }
}
