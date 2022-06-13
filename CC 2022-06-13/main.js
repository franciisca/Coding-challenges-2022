//Highest and Lowest
//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript


// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//P: valid Int32 numbers (no need to validate them). Always at least one number in the input string.
//R: return output string that has 2 numbers (the highest and lowest. highest is first. Separated by a single space)
//E: ("2 5 8 9") returns "9 2"
//Pseudo: function that takes a string. we pass the string to an array. check the math min and max. return them as a string.

function highestAndLowest(str){
    const toArray = str.splice()
    return toArray


}