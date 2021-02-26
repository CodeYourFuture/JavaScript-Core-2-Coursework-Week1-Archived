Object.keys()
Object.values()
Object.entries()
  
let people = {
  name: "Amy",
  hair: "curly",  
}
  
let test = console.log(`"test" ${Object.keys(people)}`);  //result: "TEST" name,hair
let test1 = console.log(`"test1" ${Object.values(people)}`);  //result: "TEST1" Amy,curly
let test2 = console.log(`"test2" ${Object.entries(people)}`);  //result: "TEST2" name,Amy,hair,curly
