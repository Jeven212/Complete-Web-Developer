// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: 
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e. 
// [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const input = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const answer = [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591];

function q1(array){
    let sorted = array.sort((a, b) => a - b);
    let myanswer = [];
    let temp = [];

    while (sorted.length > 0){
        temp = sorted.filter(num => num === sorted[0])
        sorted = sorted.filter(num => num != sorted[0])
        myanswer = temp.length < 2 ? myanswer.concat(temp[0]) : myanswer.concat([temp]);
        console.log("temp", temp);
        console.log("sorted", sorted);
        console.log("myanswer", myanswer);
    }

    console.log(myanswer);
}


// Question 2: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, 
// give the target number. For example: answer([1,2,3], 4)should return [1,3]

function q2(array, value){
    for (let num of array){
        if (array.includes(num - value)){
            return [num, num - value];
        }
        else if(array.includes(value - num)){
            return [num, value - num];
        }
    }
}


// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect 
// the formats so that if you enter HEX color format it returns RGB and 
// if you enter RGB color format it returns HEX.

function getNum(value){
    // Converts a single hex char into dez
    // If it's bigger than ASCII-Code 57, it's a letter
    return value.charCodeAt() > 57 ? value.charCodeAt() - 87 : value;
}

function getHex(value){
    // Max input: 255
    // Return a hex string with size of 2
    // Add 87 so we get the propper ASCII-Code
    if (value > 255) return Error;

    let first = Math.floor(value / 16);
    first = first > 9 ? String.fromCharCode(first + 87) : first;

    let second = value % 16;
    second = second > 9 ? String.fromCharCode(second + 87) : second;
    console.log(typeof "".concat(first).concat(second), "".concat(first).concat(second))
    return "".concat(first).concat(second);
}

function converter(value){
    // If hex was entered
    if (value.length === 6){
        let RGB = {
            red: undefined,
            green: undefined,
            blue: undefined
        }

        let i = 0;
        for (color in RGB){
            RGB[color] = getNum(value[i]) * 16 + getNum(value[i + 1]) * 1;
            i = i + 2;
        }

        console.log(RGB)
        return RGB;
    }
    // If dez was entered
    else if (value.length === 3){
        let hex = "";
        for (let i = 0; i < 3; i++){
            hex = hex.concat(getHex(value[0]));
        }
        return hex;        
    }
    // Wrong entry
    else 
        return console.log("HEX: ffffff OR RGB: [255, 255, 255]");
}
