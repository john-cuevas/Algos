function moveZeros(arr) {
    let count = 0;
    let result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != 0) { // if arr[i] not equal to zero, push element to result array and then increment count
            result.push(arr[i]);
            count++;
        }
    }
    for (var j = count; j < arr.length; j++) { // this adds zeros to end of result array from count to arr.length
        result.push(0);
    }
    return result;
}

// SOLUTION WITHOUT MAKING A NEW ARRAY

function moveZeros2(arr) {
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != 0) { 
            arr[count++] = arr[i]; // increments count
        }
    }
    while(count < arr.length){ 
        arr[count++] = 0; // increments count and sets that element to 0
    }
    return arr;

}

let arr1 = [1,0, 2, 0, 3];
let arr2 = [1, 0, 'help', 1, 2];
console.log(moveZeros(arr1));
console.log(moveZeros2(arr1));
console.log("------------------")
console.log(moveZeros(arr2));
console.log(moveZeros2(arr2));

