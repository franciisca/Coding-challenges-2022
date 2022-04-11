// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//P: Take and array
//Remove every second element of the array. 

function removeEverySecond(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i+=2){
        newArr.push(arr[i])
    }
    console.log(newArr)
}

removeEverySecond(['uno','dos','tres','cuatro','cinco'])

//Always keep the first element, and start removing with the next element.

//E: ['Hello', 'Here', 'Coat', 'Start'] --> ['Hello', 'Coat',]