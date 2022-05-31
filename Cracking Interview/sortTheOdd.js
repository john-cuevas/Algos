// sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
    let evenArray = [];
    let oddArray = [];
    let result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i]%2 === 0) {
            evenArray.push(array[i]);
        }
        else{
            oddArray.push(array[i]);
        }
    }
    oddArray.sort((a, b) => a-b);
    console.log(oddArray);
    console.log(evenArray);
    for(var i = 0; i < array.length; i++){
        if (array[i]%2 === 0) {
            result.push(evenArray.shift());
        }
        else{
            result.push(oddArray.shift());
        }
    }
    return result;
}

// MORE OPTIMAL SOLUTION

function sortArray2(array) {
    let oddArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i]%2 != 0) {
            oddArray.push(array[i]);
        }
    }
    oddArray.sort((a, b) => a-b);
    console.log(oddArray);
    // shift removes first element of an array and returns that element
    for(var j = 0; j < array.length; j++){
        if (array[j]%2 != 0) {
            array[j] = oddArray.shift();
        }
    }
    return array;
}


let arr1 = [5, 8, 6, 3, 4];
console.log(sortArray(arr1));
console.log("------------")
console.log(sortArray2(arr1));