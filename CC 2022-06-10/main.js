//Sum of two lowest positive integers
//https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//P: takes array of minimum 4 positive integers (no floats, no non-positive).
//R: return sum of the 2 lowest numbers in array
//E: [20,30,10,4,6] => 10
//Pseudo: function takes an array. Then checks the 2 lowest numbers.
//takes them and adds them. Return the result.

function sumTwoMin(arr){
    const minTwo = arr.sort((a,b) => a-b).slice(0,2)
    let sum = 0;
    for (let i = 0; i<minTwo.length; i++){
        sum+= arr[i]
    }
    return sum
}

sumTwoMin([20,30,12,3])

//Works!