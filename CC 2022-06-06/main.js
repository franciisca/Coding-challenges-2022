//Exes and Ohs
//https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//P: take a string of "x" "o", case insensitive. Ignore other letters, but when no "x" or "o" are present, return true. 
//R: Return true if it's the same number od "x" and "o" or if it's ONLY other letters.
//E: (above)
//Pseudo: function that takes a string of "x" and "o", plus other letters OR just other letters.
//return true when the number of "x" is the same as "o"
//return true if the string ONLY has letters different than "x" and "o"


const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }

// works!





// function XO(str) {
//     let counterOh = 0
//     let counterEx = 0
//     for (let position = 0; position < str.length; position++){
//         if (str.charAt(position) == "o" || "O") 
//          {
//          counterOh += 1;
//          }
//         }

//     for (let position = 0; position < str.length; position++){
//             if (str.charAt(position) == "x" || "X") 
//               {
//               counterEx += 1;
//               }
//             }
//      if (counterOh == counterEx){
//          return true
//      }else{
//          return false
//      }
// }