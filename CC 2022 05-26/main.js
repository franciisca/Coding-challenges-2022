//Beginner Series #1 School Paperwork
//https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript


//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

//PREP
//P: only integers. Need to return 0 if N and/or M are less than zero. n(classmates) m(pages).
//R: return.
//E:// n = 10, m=2: 20
// n = -20, m = 10: 0
// n = 3, m=10: 30
//Pseudo: We take two parameters n and m (classmates and pages).
//we multiply number of n and m to get the number of blank pages we need.
//add if statement if n and/or m is less than zero (in that case, the return must be zero).

function paperwork(n, m) {
  let blankPages = (n*m)
  if(n < 0 || m < 0){
    return 0;
  }
  return blankPages
}

//Works!