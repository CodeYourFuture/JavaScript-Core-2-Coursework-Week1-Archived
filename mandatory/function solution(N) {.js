function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  for (let i = 1; i <= N; i++) {
    if (i !== N) {
      // console.log("L")
      console.log("L");
    } else {
      console.log("L".repeat(N));
    }
  }
}

// solution(4);

function solution2(D, S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const parsed = parseInt(S, 10);
  //   let result = D * parseInt(S);
  console.log(parsed);
  //   return result;
}

// solution2(4, "two");

function filterInt(value) {
  if (/^[-+]?(\d+|Infinity)$/.test(value)) {
    return Number(value);
  } else {
    return NaN;
  }
}

// console.log(filterInt("two"));

function iTri(s) {
  //its gonna be a long day!
  const distanceToSwim = 2.4;
  const distanceToBike = 112;
  const distanceToRun = 26.2;
  const totalDistance = distanceToSwim + distanceToBike + distanceToRun;
  console.log(totalDistance - s);

  let result = {};

  if (s === 0) {
    return "Starting Line... Good Luck!";
  } else if (s < distanceToSwim) {
    result["Swim"] = `${(totalDistance - s).toFixed(2)} to go!`;
  } else if (s > distanceToSwim && s < distanceToBike) {
    result.Bike = `${(totalDistance - s).toFixed(2)} to go!`;
  } else if (totalDistance - s >= 10) {
    result.Run = `${(totalDistance - s).toFixed(2)} to go!`;
  } else if (totalDistance - s <= 10 && s < totalDistance) {
    result.Run = "Nearly there!";
  } else {
    return "You're done! Stop running!";
  }
  return result;
}
// iTri(2);
// iTri(36);

// console.log(iTri(142));
// console.log(iTri(128));

function match(candidate, job) {
  // is this job a valid match for the candidate?
  if (candidate.minSalary && job.maxSalary) {
    let salary = candidate.minSalary - candidate.minSalary * 0.1;
    // console.log( candidate.minSalary * 0.9);
    if (salary <= job.maxSalary) {
      return true;
    } else {
      return false;
    }
  } else {
    return "error";
  }
}

// let candidate1 = { minSalary: 120000 };

// let job1 = { maxSalary: 130000 };
// let job2 = { maxSalary: 80000 };

// console.log(match(candidate1, job2));

function numObj(s) {
  return s.map((n) => {
    return { [n]: String.fromCharCode(n) };
  });
  //   long way
  //   let result = [];
  //   for (let val of s) {
  //     result.push({
  //       [val]: String.fromCharCode(val),
  //     });
  //   }
  //   return result;
}

// console.log(numObj([118, 117, 120]));

const whosOnline = (friends) => {
  // Your code here...
  let result = {};
  let online = [];
  let offline = [];
  let away = [];
  if (friends.length === 0) {
    return result;
  }
  friends.forEach((friend) => {
    if (friend.status === "online" && friend.lastActivity <= 10) {
      online.push(friend.username);
      result["online"] = online;
    } else if (friend.status === "offline") {
      offline.push(friend.username);
      result["offline"] = offline;
    } else {
      away.push(friend.username);
      result["away"] = away;
    }
  });
  return result;
};

let friends;

friends = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

friends1 = [
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

console.log(whosOnline(friends));

// { online: [ 'David' ], offline: [ 'Lucy' ], away: [ 'Bob' ] }
