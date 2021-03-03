const tasks = [
  {
    'name'     : 'Write for Envato Tuts+',
    'duration' : 120
  },
  {
    'name'     : 'Work out',
    'duration' : 60
  },
  {
    'name'     : 'Procrastinate on Duolingo',
    'duration' : 240
  }
];
let task1 = tasks[0];
let task2 = tasks[1];
let task3 = tasks[2];
 
console.log(task1.duration);
console.log(task2.duration);
console.log(task3.duration);

function taskX(task) {
    console.log(task.duration);
}
taskX(tasks[0]);
taskX(tasks[1]);
taskX(tasks[2]);

var i = 0;
while  (i < tasks.length) {
    taskX(tasks[i]);
    i++;
};
console.log("from here");
tasks.forEach(function (task) {
console.log(task.duration);
});
tasks.forEach(element => {console.log(element.duration);

});

// for (i = 0 ; i < tasks.length ; i++ ) {
//     taskX(tasks[i]);
// }
console.log("from here")
tasks.forEach(task => {
  console.log(task.name);
})


function x(num) {
  num = num + "2";
  num = num + " 2";
  return num;

}
x(3);
console.log(x(3));