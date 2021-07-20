let writers = [
    {
      firstName: "Virginia",
      lastName: "Woolf",
      occupation: "writer",
      age: 59,
      alive: false,
    },
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 40,
      alive: true,
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      occupation: "writer",
      age: 41,
      alive: false,
    },
    {
      firstName: "Bell",
      lastName: "Hooks",
      occupation: "writer",
      age: 63,
      alive: true,
    },
    {
      firstName: "Yukiko",
      lastName: "Motoya",
      occupation: "writer",
      age: 49,
      alive: true,
    }
  ];

  function logDeadWritersInTheirForties(elem) {
    // write your code here
    const writerDead= writers.forEach(function(elem){
         return elem < 40;
    });
    console.log("writerDead");
