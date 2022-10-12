//#1 change this function into a ternary and assign it to variable called experiencePoints
var experiencePoints = winBattle() ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
// Undefined, switch breaked

//#3 return value when moveCommand("back");
// "you arrived home", switch breaked

//#4 return value when moveCommand("right");
// "you found a river", function closed

//#5 return value when moveCommand("left");
// Undefined, switch breaked

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

var n = 2;

switch(n) {
    case 1:
        console.log("Numbre: ", n);
        break;
    case 2:
        console.log("Numbre: ", n);
        break;
    case "2":
        console.log("String: ", n);
        break;
    default:
        console.log("Wrong entre!");
}