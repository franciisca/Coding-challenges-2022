//Keep up the hoop
//https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript

//Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

//PREP
//P: takes integer (any positive number including zero).

//R: return a string. 2 cases.

//E: alex hoops 3 times (or zero) = "Keep at it until you get it"
//alex hoops 10 or more = "Great, now move on to tricks".

//Pseudo:
//Alex uses hoop many times
//take in number of hoops
//if it's 10 or more: string
//if less than 9: string2

function hoopCount(score){
    if(score >= 10){
        return "Great, now move on to tricks"
    }else{
        return "Keep at it until you get it"
    }
}

//works!