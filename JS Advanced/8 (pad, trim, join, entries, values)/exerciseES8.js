// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

turtle.padStart(8);
rabbit.padStart(8);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
//'🐢======='


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
//'my name is Rudolf the raindeer'

const part1 = Object.entries(obj).map(array => array[0] + array[1]);
let sentence = "";
part1.forEach(word => sentence = sentence.concat(word));
console.log(sentence);

// better
Object.entries(obj).map(value => value.join(" ")).join(' ')
//The join() method creates and returns a new string by concatenating all of the elements 
//in an array (or an array-like object), separated by commas or a specified separator string. 
//If the array has only one item, then that item will be returned without using the separator.


// Object.values(obj);
// ['name', 'Rudolf', 'raindeer']
