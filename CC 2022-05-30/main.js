//Categorize New Member
//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/javascript


// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

//PREP
//P: One array that takes integers (negative or positive). Inside the array there's a set of two numbers: the age and the handicap number (input)
//R: returns an array of strings (output)
//E: [20,8]  //["Open"]
//Pseudo: function. the parameter takes an array (list of pairs). 
//then it checks if age is 55orMore AND the handicap greater than 7  = Senior (if not "Open")
//(handicaps range from -2 to +26) 


function openOrSenior(data){
  return data.map(([age,handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open')
}

//Works!