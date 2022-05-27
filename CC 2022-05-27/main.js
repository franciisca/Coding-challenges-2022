//Two to One
//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//PREP
//P: takes strings always. 2 strings, includes only letters from a to z.
//R: return new sorted string. has the letters in alphabetical order. map?
//E: 
//a = ajndbverpijr
//b = ajnlop
//longest(a, b) -> "abdeijlnopr"

//Pseudo: 
// takes two string. Concatenate the 2 strings.
//compare the twoStrings to an existing variable(string) of "a-z"
//return newString (in order from a to z)

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

longest("asjsj", "loklo")

//Works!