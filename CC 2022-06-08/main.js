// Sentence Smash

//https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

//P: takes array of words. 
//R: RETURN a sentence with spaces in between words but no spaces at the beginning or end.
//E: ['Me', 'llamo', 'Pepe'] => 'Me llamo Pepe'
//Pseudo: function that takes an array. join the array (join( )) and add ''with a space in between.

function smash (words) {
    return words.join(' ')
 };


 smash(['hello', 'world', 'this', 'is', 'great'])

 //works!
//look for different answers in code wars 
