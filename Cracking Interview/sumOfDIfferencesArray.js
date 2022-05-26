// Task is to sum the differences between consecutive pairs in the array in descending order
// [2, 1, 10] -> 9
// In descending order [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) -> 9
// if array is empty or only has one element, return 0

// psuedo code
// need to sort array in descending order


function sumOfDifferences(arr){
    if(arr.length <= 1 ){
        return 0;
    }

    // can also use built in sort function to sort through the array
    arr.sort((a,b) => b - a);

    // for(let i = 0; i < arr.length; i++){
    //     for(let j = i +1; j < arr.length; j++){
    //         if(arr[i] < arr [j]){ // perform swap
    //             temp = arr[i];
    //             arr[i] = arr[j];
    //             arr[j] = temp;
    //         }
    //     }
    // }
    let sum = 0;
    let dif = 0;
    for(let k = 0; k < arr.length-1; k++){
        dif = arr[k] - arr[k+1];
        sum += dif;
    }
    return sum;
    

}

// built in functions
function sumOfDifferences2(arr){
    arr.sort((a,b) => b - a);
    arr.map((a,i) => a - arr[i+1] || 0 ); // map creates a new array calling a function for every array element
    arr.reduce((a,b) => a + b, 0)

}

let array1 = [2, 1, 10];
let array2 = [10];
let array3 = [];

console.log(sumOfDifferences(array1));
console.log(sumOfDifferences(array2));
console.log(sumOfDifferences(array3));

console.log("---------------------------")

console.log(sumOfDifferences2(array1));
console.log(sumOfDifferences2(array2));
console.log(sumOfDifferences2(array3));