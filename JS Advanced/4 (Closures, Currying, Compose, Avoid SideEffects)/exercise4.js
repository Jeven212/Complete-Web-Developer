//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const addadd = one => two => one + two;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
// 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
// 31


//Currying: What does the last line return?
const sub = (a, b) => a - b
const curriedSub = (a) => (b) => a - b
const subfrom5 = curriedSub(5)
subfrom5(12)
// I changed it a little bit
// -7

//Composing: What does the last line return?
const compose = (outerFunc, innerFunc) => (value) => outerFunc(innerFunc(value));
const add1 = (num) => num + 1;
const add6 = (num) => num + 6;
compose(add1, add6)(10)

//What are the two elements of a pure function?
// Determinism -> Same input, always same output
// No side effects -> It does not depend on any state, or data, change during a program’s execution. 
//                    It must only depend on its input elements.
