function ArrayChallenge(arr) {
    // Pseudo Code
    // For loop to iterate through array
    //  if condition
    //  if(arr[i] < arr[i-1])

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            console.log("Array stops increasing here: ", arr[i - 1])
        }
        else {
            return -1;
        }


    }

}

// keep this function call here 
var readline = [-4, -2, 9, 10];

// coderbyte said copy paste - but I copy and paste the input array

var readline2 = [5, 4, 3, 2, 10, 11];

console.log(ArrayChallenge(readline));
console.log(ArrayChallenge(readline2));

function MathChallenge(num1, num2) {

    let result = num1 / num2;

    let roundedResult = result.toFixed(4)

    let resultString = roundedResult.toString;

    // code goes here  
    return resultString;

}

// keep this function call here 

console.log(MathChallenge(123456, 100));

function ArrayChallenge1(strArr) {

    // Pseudo code
    // trying to understand the output

    // 1 2 1
    // 4 1 5
    // 5 2 1

    // output (1-1)(2-2)(3-3)

    // values of location in matrix of output
    // 1 1 1

    // matrix represents machine at row i performing task at column j
    // cost for this is matrix [i][j]

    // 5 4 2
    // 12 4 3
    // 3 4 13
    // output (1-3)(2-2)(3-1)

    // values of location in matrix of output
    // 2 4 3

    // 13 4 7 6
    // 1 11 5 4
    // 6 7 2 8
    // 1 3 5 9
    // output(1-2)(2-4)(3-3)(4-1)

    // values of location in matrix of output
    // 4 4 2 1

    for (var i = 0; i < strArr.length; i++) {
        for (var j = 0; j < strArr[i]; j++) {
            console.log(strArr[i][j])
        }

    }
    // code goes here  
    return strArr;

}

// keep this function call here 
var input = ["(1,2,1)", "(4,1,5)", "(5,2,1)"]
console.log(ArrayChallenge1(input));