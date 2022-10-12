// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const forEachArray = [];
array.forEach(human => {
  forEachArray.push(human.username + "!");
});
console.log(forEachArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map(human => human.username + "?");
console.log(mapArray);

//Filter the array to only include users who are on team: red
const filteredArray = array.filter(human => human.team === "red");
console.log(filteredArray);

//Find out the total score of all users using reduce
const totalScore = array.reduce((x, next) => {
  console.log(x, " AND ", next.score);
  return x + next.score;
}, 0);
console.log(totalScore);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})
// i is the index
const newArrayBetter = arrayNum.map(num => num * 2);
console.log(newArrayBetter);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
let bigArray = array.map(human => (
  {
    username: human.username,
    team: human.team,
    score: human.score,
    items: human.items.map(item => item + "!")
  }
));
// OR
bigArray = array.map(human => {
  return (
    {
      username: human.username,
      team: human.team,
      score: human.score,
      items: human.items.map(item => item + "!")
    }
  );}
);
//OR
bigArray = array.map(human => {
  human.items = human.items.map(item => item + "!");
  return human;
});
console.log(bigArray);
