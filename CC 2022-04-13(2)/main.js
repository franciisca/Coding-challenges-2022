//Shifty Closures
//https://www.codewars.com/kata/514aa0dc21607ae236000017/javascript

//Functional closures can get overly attached. Set them straight!
//Why doesn't greet_abe() actually greet Abe?

// var name = 'Abe';
// var greet_abe = function() {
//   return "Hello, " + name + '!';
// };
// name = 'Ben';
// var greet_ben = function() {
//   return "Hello, " + name + '!';
// };


function greet_abe() {
    let name = 'Abe'
    return `Hello, ${name}!`
  }

function greet_ben() {
    let name = 'Ben'
    return `Hello, ${name}!`
    }

//It works