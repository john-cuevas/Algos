const squareMatrix1 = [

    [1, 2, 3], //arr[0][right]. arr[0][left]
    [4, 5, 6], //arr[1][1]. arr[1][left-1]
    [9, 8, 9], //arr[2][2]. arr[2][0]
];
const expected1 = 2;



//left to right diagonal: 1 + 5 + 9 = 15
//right to left diagonal: 3 + 5 + 9 = 17
//absolute difference = 2

const squareMatrix2 = [
    [1, 2, 3, 4, 5], //arr[0][0]. arr[0][arr.length-1]
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
//left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
//right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
//absolute difference = 0

// Pseudo Code

// first diagonal
// for loop iterate through first array of matrix 
// declare left & right variables
// first loop : right set as [i][right] length is set as [i][left]
//s


function diagonalDifference(sqrMatrix) {
    let left = 0;
    let right = 0;
    for (let i = 0; i < sqrMatrix.length; i++) {
        left += sqrMatrix[i][i];
        right += sqrMatrix[i][sqrMatrix.length - 1 - i]
    }
    return Math.abs(left - right);

    //given a square matrix (2d array) of integers
    // calculate the absolute difference between the sum of its diagonals

}

console.log(diagonalDifference(squareMatrix1))
console.log(diagonalDifference(squareMatrix2))


